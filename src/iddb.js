const DB_NAME = 'imgdb';
// const DB_NAME = 'itemdb';
const DB_VERSION = 1.1;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			
            // var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
                console.log('OPENED DB', DB);
				resolve(DB);
			};
			
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("items", { autoIncrement: true, keyPath:'id' });
				
				
			};
		});
	},
	
	async deleteItem(previewImage) {

		let db = await this.getDb();

		return new Promise(resolve => {
          
			let trans = db.transaction(['items'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('items');
			store.delete(previewImage.id);
		});	
	},
	async getItems() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['items'],'readonly');
			trans.oncomplete = () => {
				resolve(items);
			};
			
			let store = trans.objectStore('items');
			let items = [];
			
			store.openCursor().onsuccess = e => {
				let cursor = e.target.result;

                
				if (cursor) {
					items.push(cursor.value)
					cursor.continue();
				}
			};

		});
	},

	async saveItem(previewImage) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['items'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('items');
			store.put({previewImage});
			

			
		});
	

		// console.log("Putting items in IndexedDB");

		// // Open a transaction to the database
		// var transaction = db.transaction(["items"], IDBTransaction.READ_WRITE);

		// // Put the {previewImage} into the dabase
		// var put = transaction.objectStore("items").put({previewImage});

		// // Retrieve the file that was just stored
		// transaction.objectStore("items").get("image").onsuccess = function (event) {
		// 	var imgFile = event.target.result;
		// 	console.log("Got elephant!" + imgFile);

		// 	// Get window.URL object
		// 	var URL = window.URL || window.webkitURL;

		// 	// Create and revoke ObjectURL
		// 	var imgURL = URL.createObjectURL(imgFile);

		// 	// Set img src to ObjectURL
		// 	var imgElephant = document.getElementById("elephant");
		// 	imgElephant.setAttribute("src", imgURL);

		// 	// Revoking ObjectURL
		// 	URL.revokeObjectURL(imgURL);
		// };
	}

}



