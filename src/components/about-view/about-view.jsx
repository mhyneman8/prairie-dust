import React from 'react';
import Navbar from '../navbar/navbar';
// import IngredientsView from '../ingredients-view/ingredients-view';

function AboutView() {
        return (
            <div className="about-view">
                <Navbar />
                <h3>Why do you want to use our handmade soap? Great question, thanks for asking!</h3>
                <p>
                    Our recipes are free of chemicals and preservatives. By using organic, environmentally friendly ingredients, you have a product that is good for your skin. Coconut oil is the most important oil used in our soap making. Along with olive oil and various other oils, and shea butter, you have a product that reduces dry skin, is antimicrobial, and won't clog pores. These oils are high in vitamin A, E, and C, which can relieve skin conditions such as acne, psoriasis, and eczema. The fragrances are plant based essential oils and will leave a fresh aroma on your skin.

                    The palm oil industry is linked to major issues such as deforestation, habitat degradation, climate change, animal cruelty and indigenous rights abuse in the countries where it is produced.  The land and forests in these areas must be cleared for the development of the oil palm plantations.  This leads to the loss of habitat for endangerged species such as the orangutan.  This is why our soaps don't contain Palm Oil. 

                    The oils we use are safe to use on your skin, and are a better option, especially when compared to store bought soaps; which can be as harsh as laundry and dishwashing soap. Our soaps will never strip your skin of its natural oils; which will hold off wrinkles and scratchy, dry skin. It’s important to be educated about harmful ingredients prior to purchasing soap products. You want to refresh your skin, not pollute it with chemicals. If you can’t pronounce the words on the back of the label – put the product down! 
                    Synthetic Perfume: artificial perfume scents, although they smell nice, are linked to allergies and hormonal issues. As well, synthetic ingredients such as perfume are likely to cause skin conditions and to aggravate existing issues such as acne.
                    Petrochemicals: made from petroleum, these chemicals should be considered unsafe for humans because little is known about the longterm effects they have on our health.
                    Artificial Colouring: commercial soaps are packed with artificial dyes that have been known to cause health problems and illnesses in humans.
                    Parabens: otherwise known as chemical preservatives, these harmful ingredients are found in a majority of commercial soap and beauty products.

                    ​If you are unable to join us at one of our locations, please send us an email and tell us what you would like to order.
                </p>


                {/* <IngredientsView /> */}
            </div>
        );
    }

export default AboutView;