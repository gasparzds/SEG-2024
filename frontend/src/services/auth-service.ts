import { supabase } from "../@libs/supabase"
import { Icredential } from "../@libs/types"

const signIn = async (credential: Icredential) =>  {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: credential.username, 
        password: credential.password
    });

    if (error)
        throw error;
    return data;
    

}

export const AuthService = {
    signIn
}