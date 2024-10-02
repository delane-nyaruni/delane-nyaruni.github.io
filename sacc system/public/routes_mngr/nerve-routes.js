/*
  url neural structure
*/  

const baseURL = `../index.html`;

const directories = {
    
    authManager:{//auth dir
      principalAuth: [`${baseURL}../../../handler_mngr/principal_handler/princip-dashboard.html`],
      adminAuth: `${baseURL}../../../handler_mngr/administrator_handler/admin-dashboard.html`,
      sudoAuth: `${baseURL}../../../handler_mngr/sudo_handler/sudo-dashboard.html`
    },
    handlerManager:{// manages handler routes
      principalHandler: {principalDashboard:{},chartAnalytics:{}},
      administratorHandler: {adminDashboard:`./sudo-dashboard.html`},
      sudoHandler:{} `${baseURL}../../../handler_mngr/sudo_handler/sudo-dashboard.html`,  
      publicHandler:{// handles public file routes
        publicBaseDir: `${baseURL}../../../`,
        schoolHomePage: `${baseURL}./handler_mngr/principal_handler/princip-dashboard.html`,
        exitSystem: `${baseURL}../../../login.html`
        } 
    },
    paymentMngr:{// handles payment routes api to send msgs 
      paymentMethod:{
        usd: `${baseURL}../../../`,
        rtgs: `${baseURL}./handler_mngr/principal_handler/princip-dashboard.html`,
        swipe: `${baseURL}../../../login.html`
      }
    }, 
  
    //index directories
  baseDir: `${baseURL}../../../`,
  homePage: `${baseURL}./handler_mngr/principal_handler/princip-dashboard.html`,
  principalAuth: `${baseURL}../../../handler_mngr/principal_handler/princip-dashboard.html`,
  adminAuth: `${baseURL}../../../handler_mngr/administrator_handler/admin-dashboard.html`,
  sudoAuth: `${baseURL}../../../handler_mngr/sudo_handler/sudo-dashboard.html`,
  exitSystem: `${baseURL}../../../login.html`,
};


function principalAuth() {
    location.href = directories.homePage;
  }
  
function adminAuth() {
  location.href = directories.handlerManager.administratorHandler.adminDashboard;
  }

function sudoAuth() {
  location.href = directories.sudoAuth;
  }

function exitSystem(){
  location.href = directories.exitSystem;

 //  window.close(); 
  }

  console.log(exitSystem());
  exports.dir = dir;