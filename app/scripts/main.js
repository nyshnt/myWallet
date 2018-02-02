window.addEventListener('load', function() {
      // Checking if Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
        startApp()
      } else {
        console.log('Injected web3 Not Found!!!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    
        var provider = document.getElementById('provider_url').value;
        window.web3 = new Web3(new Web3.providers.HttpProvider(provider));
        
        console.log("testrpc") 
      }
      startApp()
    })

function startApp(){
    $(document).ready(function(){

        // $("#generateAccount").click(function(){
        //     web3.personal.newAccount($("#password").val(), function(err, res){
        //         if(!err){
        //             //$("#newAddress").text(res);
        //             console.log(res)
        //         }else
        //         {
        //             console.log(err)
        //         }
        //     });
        // })

        // var numbers = web3.eth.accounts;
        // console.log(numbers)
        //var balance = web3.eth.getBalance("");
        // for (var i=0;i<numbers.length;i++){
        //     $('<option/>').val(numbers[i]).html(numbers[i]).appendTo('#items');
        // }
        
        // for (var i=0;i<numbers.length;i++){
        //     $('<option/>').val(numbers[i]).html(numbers[i]).appendTo('#items1');
        // }

        //function to send transaction
        $("#send").click(function(){
            
            var fromAccount = web3.eth.accounts[0];
            var toAccount = $('#toAccount').val();
            var ethervalue = web3.toWei($("#value").val());
            web3.eth.sendTransaction({
                from: fromAccount,
                to: toAccount,
                value: ethervalue
            }, function(err, res){
                if(!err){
                    console.log(res);
                }else
                {
                    return err;
                }
            })
        })


        var account = web3.eth.accounts[0];
        $("#address").text(account)
        web3.eth.getBalance(account, function(err, res){
            $("#balance").text(web3.fromWei(res))
        });

        var abi=[
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "totalSupply",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "remaining",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            }
        ];
        var count;
        var contractAddress = "0x9d4c8317729d307b6fc8886b7a68d9fb202b5748";
        var contract = web3.eth.contract(abi).at(contractAddress);

        contract.balanceOf(account, function(err, res){
            if(!err){
                $("#tokenBalance").text(web3.fromWei(res));
            }
            else{
                console.log(err);
            }
        })

        $("#sendToken").click(function(){
            var toTokenAccount = $("#toTokenAccount").val();
            var tokenValue = web3.toWei($("#tokenValue").val());
            contract.transfer(toTokenAccount, tokenValue, {from: account}, function(){
                if(!err)
                {
                    console.log(res)
                }else{
                    console.log(err)
                }
            });
        });
    });
};
