const notableLandMarks = [
    {
        name: "Eiffel Tower"
        , year: "1889"
        , description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
        , website: "https://www.toureiffel.paris/en"
    }
    ,
    {
        name: "Arc de Triomphe de l'Étoile"
        , year: "1806"
        , description: "Wanted by Napoleon in 1806, the Arc de Triomphe was inaugurated in 1836 by French king, Louis-Philippe, who dedicated it to the armies of the Revolution and the Empire. The Unknown Soldier was buried at the base of the arch in 1921. The flame of remembrance is rekindled every day at 18:30."
        , website: "http://www.paris-arc-de-triomphe.fr/en/"
    }
    ,
    {
        name: "Notre Dame Catherdral"
        , year: "Old"
        , description: "The Notre Dame Cathedral is widely considered one of the finest examples of French Gothic architecture in the world. The name Notre Dame means 'Our Lady' in French, and is frequently used in the names of Catholic church buildings in Francophone countries."
        , website: "https://notredamecathedralparis.com/"
    }
]

export const getLandMarks = () =>{
    return notableLandMarks;
}