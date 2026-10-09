import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {getFirestore,doc,collection,onSnapshot} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import cfg from "./firebase-config.js";
if(cfg.projectId){var db=getFirestore(initializeApp(cfg)),m=null,it=null;
function p(){if(m&&it)window.setData(Object.assign({},m,{items:it}))}
onSnapshot(doc(db,"shop","main"),s=>{if(s.exists()){m=s.data();p()}});
onSnapshot(collection(db,"items"),s=>{if(s.empty&&s.metadata.fromCache)return;it=s.docs.map(d=>d.data()).sort((a,b)=>(a.o||0)-(b.o||0));p()})}
