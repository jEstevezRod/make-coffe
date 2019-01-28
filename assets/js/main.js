        
        $("#flip").click(() => {
//             let array1 = ['Jesus 1', 'Kamal', 'Jesus 2','Aurelien','Miriam','Sabina'];
                let array1 = ["Jesus", "Marina la cateadora"];
            let ran = Math.floor(Math.random() * array1.length);
            alert("The winner is " + array1[ran])
        });
