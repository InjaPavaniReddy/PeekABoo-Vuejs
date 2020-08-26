import HelloWorld from "../components/HelloWorld.vue";
import Register from "../components/Register.vue";
import BloomAdmin from '../components/Admin.vue';
import UserProfile from '../components/UserProfile.vue';
import AdminProfile from '../components/AdminProfile.vue';
import NewOrder from '../components/NewOrder.vue';
import OrderHistory from '../components/OrderHistory.vue';
import CommissionReport from '../components/ComReport.vue';
import UpdateStatus from '../components/UpdateStatus.vue';


export default [
    {
        path:'/',
        component:HelloWorld
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/admin',
        component:BloomAdmin
    },
    {
        path:'/userprofile',
        component:UserProfile
    },
    {
        path:'/adminprofile',
        component:AdminProfile
    },
    {
        path:'/newOrder',
        component:NewOrder
    },
    {
        path:'/orderhistory',
        component:OrderHistory
    },
    {
        path:'/commissionreport',
        component:CommissionReport
    },
    {
        path:'/updatests',
        component:UpdateStatus
    }
    
]