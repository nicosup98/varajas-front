

const api = "https://secure-caroline-nicosup98-a3765c62.koyeb.app";

export function getVaraja(tipo) {
   const token = sessionStorage.getItem("token");

   return fetch(`${api}/varaja/user/${tipo}`, {
      headers: {
         "Authorization": `Bearer ${token}`,
      },
   });
}


export function genVaraja(tipo){
   const token = sessionStorage.getItem("token")
   return fetch(`${api}/varaja/gen/${tipo}`,{
      headers: {
         "Authorization": `Bearer ${token}`,
      }
   })
}
// funcion temporal para obtener token y probar 
export async function login() {
   const credenciales = {
      username: "nicodamico",
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
