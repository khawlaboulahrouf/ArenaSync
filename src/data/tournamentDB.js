// src/data/tournamentDB.js
export const tournamentDB = [
    {
        id: 1,
        name: "Championnat de Basketball",
        sport: "Basketball",
        date: "2024-06-15",
        location: "Paris",
        status: "On Going",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
        participants: [
            { id: 101, name: "Thomas Dubois", avatar: "https://i.pravatar.cc/150?u=101", status: "Confirmed" },
            { id: 102, name: "Marie Laurent", avatar: "https://i.pravatar.cc/150?u=102", status: "On Going" },
            { id: 103, name: "Lucas Martin", avatar: "https://i.pravatar.cc/150?u=103", status: "Pending" }
        ]
    },
    {
        id: 2,
        name: "Open de Tennis",
        sport: "Tennis",
        date: "2024-07-01",
        location: "Lyon",
        status: "Upcoming",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400",
        participants: [
            { id: 201, name: "Sophie Bernard", avatar: "https://i.pravatar.cc/150?u=201", status: "Confirmed" },
            { id: 202, name: "Pierre Moreau", avatar: "https://i.pravatar.cc/150?u=202", status: "Pending" }
        ]
    },
    {
        id: 3,
        name: "Coupe de Football",
        sport: "Football",
        date: "2024-05-20",
        location: "Marseille",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400",
        participants: [
            { id: 301, name: "Julie Petit", avatar: "https://i.pravatar.cc/150?u=301", status: "On Going" },
            { id: 302, name: "Nicolas Durand", avatar: "https://i.pravatar.cc/150?u=302", status: "Confirmed" },
            { id: 303, name: "Emma Roux", avatar: "https://i.pravatar.cc/150?u=303", status: "Confirmed" }
        ]
    },
    {
        id: 4,
        name: "Tournoi d'Échecs",
        sport: "Échecs",
        date: "2024-08-10",
        location: "Nice",
        status: "Upcoming",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400",
        participants: [
            { id: 401, name: "Alexandre Blanc", avatar: "https://i.pravatar.cc/150?u=401", status: "Pending" }
        ]
    }
];