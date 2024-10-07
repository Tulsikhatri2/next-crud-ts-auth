import React, { useEffect } from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { googleLoginData } from '@/Redux/Slice/dataSlice'

const GoogleAuth = () => {
    
    const {data: session} = useSession()
    const dispatch = useDispatch()
    const {googleUser} = useSelector((state:any)=>state.data)
    console.log(googleUser, "google auth")

    useEffect(()=>{
        if(session){
            dispatch(googleLoginData(session?.user))
            const random = Math.random().toString(36).substring(2);
            localStorage.setItem("token",random+random+random)
        }
    },[session])

    
    if(session){
        return <button onClick={()=>{
            signOut()
        }}>Logout</button>
    }else{
        return <button onClick={()=>signIn()}>Login</button>
    }

}

export default GoogleAuth