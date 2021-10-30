import React, {useEffect} from 'react' 
import firebase from 'firebase';

export default function ShowPackersMovers() {
 
    var db = firebase.firestore();
    const [isLoading,setLoading] = React.useState(false)
    const [packers,setPackers] = React.useState([])
    const [search,setSearch] = React.useState("")
  
    useEffect(() => {
        fetchPackers();

    }, [])
    
    const fetchPackers = () => {
        setLoading(true)
        db.collection("packers-movers")
        .where("businessName",">=",search)
        .where("businessName","<=",search+ '\uf8ff')
        // .where("name","==","Rahul")
        .get().then(querySnapshot=>{
            var arr = []
            querySnapshot.forEach(doc=>{
                console.log(doc.data())
                arr.push(doc.data())
            })
            setPackers(arr)
            setLoading(false)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="container widget my-5">
            <h1 className="widget_title">Packers & Movers</h1>
            <div className="d-flex align-items-start">
                <input type="search" name="search" onChange={e=>setSearch(e.target.value)} className="p-3 px-4 rounded w-100 mb-4 h5 shadow-lg" placeholder="Search for Packers and movers" />
                <button type="button" onClick={e=>fetchPackers()} className="p-3 px-md-5 bg-danger text-white">Search</button>
            </div>
            {isLoading ? <div className="text-center my-4">
                <div className="spinner-border text-info"></div>
            </div>:<>
                {packers.length > 0 ? packers.map((val,key)=>(
                    <div key={key} className="card">
                        <div className="card-body d-flex align-items-center">
                            <img src="/why/verified_drivers.jpg" alt="Person" />
                            <div className="p-2">
                                <h6>{val.businessName}</h6>
                                <div>{val.businessDesc}</div>
                            </div>
                        </div>
                    </div>
                )):<></>}
            </>}
            
        </div>
    )
}
