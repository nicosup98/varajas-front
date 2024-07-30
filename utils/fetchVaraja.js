import { redirect } from "react-router-dom";


const api = "https://secure-caroline-nicosup98-a3765c62.koyeb.app";

export async function getVaraja(tipo) {
   let user = sessionStorage.getItem("user");

   user = JSON.parse(user)

   if(!user) {
      return redirect("/login")
   }

   const resp = await fetch(`${api}/varaja/user/${tipo}`, {
      headers: {
         "Authorization": `Bearer ${user.token}`,
      },
   });

   const data = await resp.json()


   return {data, tipo}
}


export function genVaraja(tipo){
   let user = sessionStorage.getItem("user");

   user = JSON.parse(user)

   if(!user) {
      return redirect("/login")
   }
   return fetch(`${api}/varaja/gen/${tipo}`,{
      headers: {
         "Authorization": `Bearer ${user.token}`,
      }
   })
}
// funcion temporal para obtener token y probar 
export async function login() {
   const credenciales = {
      username: "nicodamico2",
      password: "123456",
      confirmPassword: "123456",
   };

   const resp = await fetch(
      `${api}/login`,
      {
         body: JSON.stringify(credenciales),
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
      },
   );

   const user = await resp.json()

   sessionStorage.setItem("token",user.token)

   return user
}
