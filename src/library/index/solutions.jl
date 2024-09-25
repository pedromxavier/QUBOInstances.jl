function _write_solution(
    fp::P,
    sol::QUBOTools.AbstractSolution,
    fmt::QUBOTools.QUBin,
) where {P<:Union{HDF5.File,HDF5.Group}}
    HDF5.create_group(fp, "solution")

    QUBOTools._write_solution_data(fp, sol, fmt)

    fp["solution"]["sense"]  = String(QUBOTools.sense(sol))
    fp["solution"]["domain"] = String(QUBOTools.domain(sol))

    QUBOTools._write_solution_metadata(fp, sol, fmt)

    return nothing
end

function add_solution!(index::LibraryIndex, instance::Integer, sol::QUBOTools.SampleSet{Float64,Int})::Integer
    @assert isopen(index)
    @assert !isempty(sol)

    if isempty(sol)
        return nothing
    end

    data = QUBOTools.metadata(sol)

    solver  = get(data, "solver", nothing)
    value   = QUBOTools.value(sol, 1)
    optimal = get(data, "status", nothing) == "optimal"

    q = DBInterface.execute(
        index.db,
        """
        INSERT INTO Solutions (
            instance,
            solver,
            value,
            optimal
        ) 
        VALUES (
            ?,
            ?,
            ?,
            ?
        )   
        """,
        (
            instance,
            solver,
            value,
            optimal,
        )
    )

    i = DBInterface.lastrowid(q)
    g = HDF5.create_group(index.h5["solutions"], string(i))

    _write_solution(g, sol, QUBOTools.QUBin())

    return i
end
