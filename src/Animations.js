export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1, 
        y: 0,
        transition:{
            duration: 0.75,
            when: "beforeChildren",
            staggerChildren: 0.5
        },
        
    },
    exit: {
        opacity: 0,
        transition:{
            duration: 0.75
        }
    }
};

export const fade = {
    hidden: {
        opacity: 0,
        scale: 1.2,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        }
    },
}