function registerProperty() {
    document.getElementById('registerPropertyForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const propertyAddress = document.getElementById('propertyAddress').value;
        const propertyRooms = document.getElementById('propertyRooms').value;

        if (propertyAddress.trim() !== '' && propertyRooms.trim() !== '') {
                successPopupMsg();// handle gracefully the error messages
                addRoom();
        }else{
            errorPopupMsg();
            }


            function successPopupMsg(){
                document.getElementById('successPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('successPopup').style.display = 'none';
                }, 2000);
            }
        
            function errorPopupMsg(){
                document.getElementById('errorPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('errorPopup').style.display = 'none';
                }, 3000); // 3 seconds before hiding the error message
            }
        
    });
}
function validateAddRoom(){
    document.getElementById('addRoomForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const propertyAddress = document.getElementById('roomPropertyAdrress').value;
        const roomNumber = document.getElementById('roomNumber').value;

        if (propertyAddress.trim() !== '' && (roomNumber.trim() !== '' || roomNumber === 0)) {
                successPopupMsg();
                addRoom();
        }else{
            errorPopupMsg();
            }


            function successPopupMsg(){
                document.getElementById('successPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('successPopup').style.display = 'none';
                }, 2000);
            }
        
            function errorPopupMsg(){
                document.getElementById('errorPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('errorPopup').style.display = 'none';
                }, 3000); // 3 seconds before hiding the error message
            }
        
    });
}
function addRoom() {
    window.location.href = './add-room.jsp';
}

function validateRemoveRoom(){
    document.getElementById('removeRoomForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const removePropertyAddress = document.getElementById('removePropertyAddress').value;
        const removeRoomNumber = document.getElementById('removeRoomNumber').value;

        if (removePropertyAddress.trim() !== '' && removeRoomNumber.trim() !== '') {
                successPopupMsg();
                removeRoom();
        }else{
            errorPopupMsg();
            }


            function successPopupMsg(){
                document.getElementById('successPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('successPopup').style.display = 'none';
                }, 2000);
            }
        
            function errorPopupMsg(){
                document.getElementById('errorPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('errorPopup').style.display = 'none';
                }, 3000); // 3 seconds before hiding the error message
            }
        
    });
}
function removeRoom(){
    // check for data 
    window.location.href = './remove-room.jsp';

}

function validateRemoveProperty(){
    document.getElementById('removePropertyForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const removePropertyAddress = document.getElementById('removePropertyAddress').value;

        if (removePropertyAddress.trim() !== '' ) {
                successPopupMsg();
                removeProperty();
        }else{
            errorPopupMsg();
            }


            function successPopupMsg(){
                document.getElementById('successPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('successPopup').style.display = 'none';
                }, 2000);
            }
        
            function errorPopupMsg(){
                document.getElementById('errorPopup').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('errorPopup').style.display = 'none';
                }, 3000); // 3 seconds before hiding the error message
            }
        
    });
}
function removeProperty() {
    window.location.href = './remove-property.jsp';
}

