import TawkTo from 'tawkto-react'

useEffect(() => {
    
    var tawk = new TawkTo("6628e37da7b967b1179912e26", "1g3s2cb3i")

    tawk.onStatusChange((status) => 
    {
        // console.log(status)
    })

}, [])