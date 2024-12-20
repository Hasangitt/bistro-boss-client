import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopulerMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const populerMenu = data.filter(item => item.category === 'popular')
            setMenu(populerMenu);
        })
    }, [])

    return (
        <section>
            <SectionTitle
            subHeading='Check it out'
            heading='FROM OUR MENU'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 mb-24 mx-4 md:mx-4 lg:mx-0">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;