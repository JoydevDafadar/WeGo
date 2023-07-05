import { collection, addDoc, getDocs, query, deleteDoc, onSnapshot } from 'firebase/firestore';


export async function registerRide(db, username, rideSource, rideDestination, rideTime) {
    try {
        const ref = await addDoc(collection(db, 'rides', rideSource, rideDestination, driverName, phoneNo, availableSeat, perPrice, isCar), {
            time: rideTime,
            registeredAt: Date.now(),
            registeredBy: driverName,
            phone: phoneNo,
            availableSeat: availableSeat,
            pricePerSeat: perPrice,
            isCar: isCar
        })

        console.log(`Ride successfully registered in ${ref.id}`);
        return ref;
    } catch (error) {
        console.error(error)
    }
}

export async function deleteRide(ref) {
    if (!ref) { console.error("DocRef to delete is undefined"); return }
    try {
        await deleteDoc(ref);
    } catch (err) {
        console.error(err);
    }
}


/*
# How to use getRides,

const rides = await getRides(db, "Kalyani", "Kolkata");

for(const ride in rides) {
    const data = ride.data();
    console.log(`Ride starts at ${ data.time } and was registered at ${ data.registeredAt }`)
    console.log(`Ref is ${doc.ref}`)
}
*/

export async function getRides(db, rideSource, rideDestination) {
    if (!rideSource || !rideDestination) console.error("Source and Destination required");
    try {
        const querySnapshot = await getDocs(query(collection(db, 'rides', rideSource, rideDestination),
            where("time", "<=", Date.now())));
        const rides = [];
        querySnapshot.forEach((doc) => {
            rides.push(doc);
        })

        return rides;
    } catch (err) {
        console.error(err);
    }
}


export async function reqRide(db, selfUsername, riderUsername, time, src, dst) {
    try {
        const ref = await addDoc(collection(db, 'users', riderUsername), {
            requester: selfUsername,
            source: src,
            destination: dst,
            time: time
        })

        console.log("Request sent successfully");
        return ref;
    } catch (err) {
        console.log(err);
    }
}

/*
# How to use getRequestsRlt,

const unsub = getRequestsRlt(db, "meghdip", (reqs)=>{
    for(const req in reqs) {
        const data = req.data();
        console.log(`Notification received ${ data }`);
        setState([...state, data])
    }
});

*/

export function getRequestsRlt(db, selfUsername, cb) {
    try {
        // const querySnapshot = await getDocs(collection(db, 'users', selfUsername));
        // const reqs = [];
        // querySnapshot.forEach((doc) => {
        //     reqs.push(doc);
        // })

        // return reqs;

        const unsub = onSnapshot(collection(db, selfUsername), (querySnapshot) => {
            const reqs = [];
            querySnapshot.forEach((doc) => {
                reqs.push(doc);
            })

            cb(reqs);
        })

        return unsub
    } catch (err) {
        console.error(err);
    }
}

