import React from 'react'
import { useRouter } from 'next/router'

export default function Doc() {
    const router = useRouter();
    const {params = []} = router.query
    console.log(params)

    if(params.length === 2){
        return(
            <h1>viewing features {params[0]} and connect {params[1]}</h1>
        )
    } else if (params.length === 3 ){
        return(
            <h1>viewing features {params[0]} and connect {params[1]}</h1>
        )
    }


  return (
    <div>Doc Home Page</div>
  )
}
