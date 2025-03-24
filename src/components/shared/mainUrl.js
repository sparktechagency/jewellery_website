const mainUrl = async (url) => {
   const response = await fetch(`http://10.0.60.129:3000${url}`);
   
   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }
   
   return await response.json();
 };
 
 export default mainUrl;
 