var documenterSearchIndex = {"docs":
[{"location":"api/#API","page":"API","title":"API","text":"","category":"section"},{"location":"api/#List-items","page":"API","title":"List items","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"QUBOLib.list_collections\nQUBOLib.list_instances","category":"page"},{"location":"api/#QUBOLib.list_collections","page":"API","title":"QUBOLib.list_collections","text":"list_collections()\n\nList the codes of the registered collections.\n\n\n\n\n\n","category":"function"},{"location":"api/#QUBOLib.list_instances","page":"API","title":"QUBOLib.list_instances","text":"list_instances(collection::AbstractString)\n\nLists the codes for all instances in a collection.\n\n\n\n\n\n","category":"function"},{"location":"api/#Load-instances","page":"API","title":"Load instances","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"QUBOLib.load_instance","category":"page"},{"location":"api/#QUBOLib.load_instance","page":"API","title":"QUBOLib.load_instance","text":"load_instance(collection::AbstractString, instance::AbstractString)\n\nLoads a specific instance for a given collection as a QUBOTools model.\n\n\n\n\n\n","category":"function"},{"location":"#QUBOLib.jl","page":"Home","title":"QUBOLib.jl","text":"","category":"section"},{"location":"#Getting-Started","page":"Home","title":"Getting Started","text":"","category":"section"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"import Pkg\n\nPkg.add(url=\"https://github.com/pedromxavier/QUBOLib.jl\")\n\nusing QUBOLib","category":"page"},{"location":"#Basic-Example","page":"Home","title":"Basic Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using QUBOLib\n\n# Get code of the first registered collection\ncoll = first(list_collections())\n\n# Get code of the first instance from that collection\ninst = first(list_instances(coll))\n\n# Eetrieve QUBOTools model\nload_instance(coll, inst)","category":"page"},{"location":"#Accessing-the-instance-index-database","page":"Home","title":"Accessing the instance index database","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using QUBOLib","category":"page"},{"location":"","page":"Home","title":"Home","text":"using SQLite, DataFrames\n\ndb = QUBOLib.database()\n\ndf = DBInterface.execute(\n    db,\n    \"SELECT collection, instance FROM instances WHERE size BETWEEN 100 AND 200;\"\n) |> DataFrame\n\nmodels = [\n    load_instance(coll, inst)\n    for (coll, inst) in zip(df[!,:collection], df[!,:instance])\n]\n\nfirst(models)","category":"page"},{"location":"database/#Database","page":"Database","title":"Database","text":"","category":"section"},{"location":"database/","page":"Database","title":"Database","text":"In this section we discuss the decisions and specifications behind the construction of the database.","category":"page"}]
}
