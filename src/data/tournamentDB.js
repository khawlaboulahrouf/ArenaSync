//src/data/tournamentard

export const tournamentData = [
  {
    id: "t1",
    sportimage: "/assets/badminton.png",
    title: "Shuttle Masters League",
    sport: "Badminton",
    status: "On Going", // UtilisÃ© pour la couleur du StatusBadge (ex: success/green)
    date: "October 12, 2025",
    location: "Badminton Hall 1",
    description: "Top players battle it out with skillful rallies and powerful smashes.",
    participantsCount: "24/32 Participants",
    format: "Single Elimination",
    type: "Public",
    participants: [
      { id: "u1", name: "Ethan Miller", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
      { id: "u2", name: "Noah Smith", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u2" },
      { id: "u3", name: "James Anderson", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u3" },
      { id: "u4", name: "David Hall", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u4" }
    ]
  },
  {
    id: "t2",
    sportimage: "/assets/basketball.png",
    title: "Hoops Championship",
    sport: "Basketball",
    status: "Upcoming", // UtilisÃ© pour la couleur du StatusBadge (ex: primary/blue)
    date: "November 2, 2025",
    location: "Indoor Arena - Court A",
    description: "Intense games filled with teamwork, speed, and spectacular shots.",
    participantsCount: "8/12 Teams",
    format: "Single Elimination",
    type: "Community",
    participants: []
  },
  {
    id: "t3",
    sportimage: "/assets/ali.png",
    title: "Ring Masters League",
    sport: "Boxing",
    status: "Pending",
    date: "December 5, 2025",
    location: "Combat Zone Gym",
    description: "A dynamic boxing competition bringing together passionate fighters.",
    participantsCount: "10/16",
    format: "Round Robin",
    type: "Pro",
    participants: [
      { id: "u5", name: "Aiden Davis", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u5" },
      { id: "u6", name: "Daniel Thomas", status: "Confirmed", avatar: "https://i.pravatar.cc/150?u=u6" }
    ]
  }
];









// src/data/tournamentDB.js
// export const tournamentDB = [
//     {
//         id: 1,
//         name: "Championnat de Basketball",
//         sport: "Basketball",
//         date: "2024-06-15",
//         location: "Paris",
//         status: "On Going",
//         image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
//         participants: [
//             { id: 101, name: "Thomas Dubois", avatar: "https://i.pravatar.cc/150?u=101", status: "Confirmed" },
//             { id: 102, name: "Marie Laurent", avatar: "https://i.pravatar.cc/150?u=102", status: "On Going" },
//             { id: 103, name: "Lucas Martin", avatar: "https://i.pravatar.cc/150?u=103", status: "Pending" }
//         ]
//     },
//     {
//         id: 2,
//         name: "Open de Tennis",
//         sport: "Tennis",
//         date: "2024-07-01",
//         location: "Lyon",
//         status: "Upcoming",
//         image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400",
//         participants: [
//             { id: 201, name: "Sophie Bernard", avatar: "https://i.pravatar.cc/150?u=201", status: "Confirmed" },
//             { id: 202, name: "Pierre Moreau", avatar: "https://i.pravatar.cc/150?u=202", status: "Pending" }
//         ]
//     },
//     {
//         id: 3,
//         name: "Coupe de Football",
//         sport: "Football",
//         date: "2024-05-20",
//         location: "Marseille",
//         status: "Pending",
//         image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400",
//         participants: [
//             { id: 301, name: "Julie Petit", avatar: "https://i.pravatar.cc/150?u=301", status: "On Going" },
//             { id: 302, name: "Nicolas Durand", avatar: "https://i.pravatar.cc/150?u=302", status: "Confirmed" },
//             { id: 303, name: "Emma Roux", avatar: "https://i.pravatar.cc/150?u=303", status: "Confirmed" }
//         ]
//     },
//     {
//         id: 4,
//         name: "Tournoi d'Échecs",
//         sport: "Échecs",
//         date: "2024-08-10",
//         location: "Nice",
//         status: "Upcoming",
//         image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400",
//         participants: [
//             { id: 401, name: "Alexandre Blanc", avatar: "https://i.pravatar.cc/150?u=401", status: "Pending" }
//         ]
//     }
// ];

