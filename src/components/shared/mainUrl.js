const mainUrl = async (url) => {
   const response = await fetch(`https://api.cathysjewelry.net${url}`);
   
   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }
   
   return await response.json();
 };
 
 export default mainUrl;
 