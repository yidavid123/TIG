const BASE = 'http://localhost:3000'

// gtg related API Calls
let get_user_gtgs = function(userId){
	console.log("User ID: " + userId)
	return fetch(BASE + '/gtgs/?userId=' + userId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let get_user_gtg = function(gtgId){
	console.log("GTG ID: " + gtgId)
	return fetch(BASE + '/gtgs/' + gtgId,{
		method: 'GET'
		}).then((r) => {
				let json = r.json()
				console.log(json)
				return json
		})
}

let add_user_gtg = function(userId,gtg){
  console.log("Adding gtgs to UserId: " + userId)
  console.log("Input gtg Info: " + gtg.name)
  return fetch(BASE + '/gtgs/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      mods: { // We pass in yelp searchParam to
          userId,
          gtg
      }
    })
   }).then((r) => {
       let json = r.json()
       console.log(json)
       return json
   })
}

let delete_user_gtg = function(gtgId) {
	console.log("Deleting gtg: " + gtgId)
	return fetch(BASE + '/gtgs/' + gtgId, {
		method: 'DELETE'

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}

let update_user_gtg = function(gtg,gtgId) {
  console.log("Update gtg info:" + gtg)
	return fetch(BASE + '/gtgs/' + gtgId ,{
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
		  mods: { // We pass in yelp searchParam to
          gtg
		  }
	  })

	 }).then((r) => {
			 let json = r.json()
			 console.log(json)
			 return json
	 })
}


export  {
					 get_user_gtgs,
					 get_user_gtg,
					 add_user_gtg,
					 delete_user_gtg,
					 update_user_gtg,

}
