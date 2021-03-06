toAccount = 0 ;
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addStore","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"sendPass","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeDelivered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"remain","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"ownid","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addCrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ownid","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"addTransport","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changePicked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addStoreOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userInfo","outputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"},{"name":"balance","type":"uint256"},{"name":"userAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIsPresent","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportInfo","outputs":[{"name":"id","type":"uint256"},{"name":"ownId","type":"uint256"},{"name":"capacity","type":"uint256"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"userIdList","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transportOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"senderId","type":"uint256"},{"name":"recieverId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"getUserName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"storeCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"userid","type":"uint256"},{"name":"usertype","type":"uint256"},{"name":"location","type":"string"},{"name":"email","type":"string"},{"name":"pass","type":"string"}],"name":"registerMe","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderId","type":"uint256"},{"name":"newStatus","type":"uint256"}],"name":"changeAccept","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transportCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"buyerOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"orderType","type":"uint256"},{"name":"orderTaken","type":"uint256"},{"name":"transportId","type":"uint256"}],"name":"addTransportOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"email","type":"string"}],"name":"getUserId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cropId","type":"uint256"},{"name":"buyerId","type":"uint256"},{"name":"quant","type":"uint256"}],"name":"addBuyerOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cropCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"storeOrderInfo","outputs":[{"name":"orderId","type":"uint256"},{"name":"cropId","type":"uint256"},{"name":"storeId","type":"uint256"},{"name":"transportId","type":"uint256"},{"name":"transportOrderId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"statusOrder","type":"uint256"},{"name":"delivered","type":"uint256"},{"name":"picked","type":"uint256"},{"name":"accept","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"storeOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"buyerOrderCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cropInfo","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"ownId","type":"uint256"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"amountSold","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
registerUserContract = web3.eth.contract(abi);

contractInstance = registerUserContract.at('0x6e508468abc8c799193387d6787f7bb2454524c5');
data = "" ;

var url = window.location.href + '';
console.log(url);
var arr = url.split("=");
asd=arr[1]+'';
var arr1=asd.split("#");
toAccount=arr1[0];
console.log("toAccount: "+toAccount);


function postStore(){
	//e.preventDeafult();
	capacity=parseInt($("#capacity").val());
	price=parseInt($("#price").val());
	contractInstance.addStore(toAccount,capacity,price, { from: web3.eth.accounts[toAccount],gas: 3000000});
	alert("Add Posted");
	showAdds();
}

function showAdds()
{
	data = "";

	for (i = 0; i < contractInstance.storeCount.call().c[0] ; i++ ) {
		str = contractInstance.storeInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		id = parseInt(arr[1]);
		if(id == toAccount){
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[2] + "</td><td> " + arr[3] + "</td><td> " + arr[4] + "</td></tr>";
		}
	}
  	$("#store_details").html(data);
}

function showAllOrders(){
	for (i = 0; i < contractInstance.storeOrderCount.call().c[0] ; i++ ) {
		str = contractInstance.storeOrderInfo.call(i)+'';
		console.log(str);
		var arr = str.split(',');
		
		cropID = parseInt(arr[1]);
		ownerName = contractInstance.getCropOwner.call(cropID);

		if(id == toAccount){
			cropID = parseInt(arr[1]);
			ownerName = contractInstance.getCropOwner.call(cropID);
			
			///////////////STATUS CODES YET TO BE USED................
			data += "<tr> <td> " + arr[0] + "</td><td> "+ arr[1] + "</td><td> " + ownerName + "</td><td> " + arr[5] + "</td></tr>";	
		}		
	}
	$("#store_orders").html(data);
}

function acceptFarmerOrder(){
	orderType = 1;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changeAccept(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function declineFarmerOrder(){
	orderType = 1;
	newState = 0;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changeAccept(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function pickStoreOrder(){
	orderType = 0;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changePicked(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}

function deliverStoreOrder(){
	orderType = 1;
	newState = 1;
	///////////////////////////////////OrderId will be obtained
	contractInstance.changePicked(orderType, orderId, newState, { from: web3.eth.accounts[toAccount],gas: 3000000});
}
showAdds();
showAllOrders();