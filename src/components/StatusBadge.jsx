//src/components/statusBadge
function StatusBadge({status}){
    let color = "";

    if (status === "On Going") {
    color = "bg-green-500";
  } else if (status === "Upcoming") {
    color = "bg-blue-500";
  } else if (status === "Pending") {
    color = "bg-orange-500";
  }

    return(
        <span className={`text-white px-3 py-1 rounded-lg text-sm ${color}`}>
      {status}
    </span>
    );

}
export default StatusBadge;

















// src/components/StatusBadge.js
// export function StatusBadge(status) {
//     const badge = document.createElement('span');
//     badge.className = 'px-3 py-1 rounded-full text-sm font-semibold';
    
//     // Logique conditionnelle pour les couleurs
//     switch(status) {
//         case 'On Going':
//             badge.classList.add('bg-green-100', 'text-green-800');
//             break;
//         case 'Upcoming':
//             badge.classList.add('bg-blue-100', 'text-blue-800');
//             break;
//         case 'Pending':
//             badge.classList.add('bg-orange-100', 'text-orange-800');
//             break;
//         case 'Confirmed':
//             badge.classList.add('bg-purple-100', 'text-purple-800');
//             break;
//         default:
//             badge.classList.add('bg-gray-100', 'text-gray-800');
//     }
    
//     badge.textContent = status;
//     return badge;
// }