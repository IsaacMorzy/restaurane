import TawkTo from 'tawkto-react'

useEffect(() => {
    
    var tawk = new TawkTo("628d59a4b0d10b6f3e73de38", "1g3s2cb3i")

    tawk.onStatusChange((status) => 
    {
        // console.log(status)
    })

}, [])