import { useState } from "react"

type Star = {
    id: number
    size: number
    x: number
    y: number
    opacity: number
    animationDuration: number
}



type meteor = {
    id: number
    size: number
    x: number
    y: number
    delay: number
    animationDuration: number
}

const StarBackground = () => {
    const [stars, setStars] = useState(() => {

        const width = window.innerWidth
        const height = window.innerHeight

        let density = 10000;

        if (width < 640) density = 20000      // mobile → fewer stars
        else if (width < 1024) density = 14000 // tablet

        const numberOfStars = Math.floor((width * height) / density)

        const newStars: Star[] = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        return newStars

    });


    const [meteors, setMeteors] = useState(() => {
        
        const numberOfMeteors = 4
        const newMeteors: meteor[] = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            })
        }
        return newMeteors

    });




    return (
        <>

            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {stars.map((star) => (
                    <div key={star.id} className="star animate-pulse-subtle" style={{ width: star.size + "px", height: star.size + "px", left: star.x + "%", top: star.y + "%", opacity: star.opacity, animationDuration: star.animationDuration + "s", }}></div>
                ))}

                {meteors.map((meteor) => (
                    <div key={meteor.id}
                        className="meteor animate-meteor"
                        style={{ width: meteor.size * 50 + "px", height: meteor.size * 2 + "px", left: meteor.x + "%", top: meteor.y + "%", animationDelay: `${meteor.delay}s`, animationDuration: meteor.animationDuration + "s", }}></div>
                ))}
            </div>
        </>
    )
}

export default StarBackground
