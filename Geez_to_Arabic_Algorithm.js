//©2013 ዓ.ም:: ሁሉም መብቶች ተፈፃሚነት አላቸው!!! መተግበሪያችንን ስለተጠቀሙ እናመሰግናለን!
//የአልጆሪዝሙ አዘጋጅ፡ ዳግም መስፍን

var እልፍዮሽ = ['፻፼፼፼', '፼፼፼', '፻፼፼', '፼፼', '፻፼', '፼', '፻', ''];
var አንዶ = ['፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱'];
var አስሮ = ['፲', '፳', '፴', '፵', '፶', '፷', '፸', '፹', '፺'];
function ቀዳሜ() {
    var ግእዝ_ቁጥሩ = '፪፻፼፼፼፵፯፼፼፼፶፪፻፼፼፴፬፼፼፷፭፻፼፴፪፼፵፯፻፹፱';
    console.log("ከግእዝ ወደ ዓረብኛ \ቁጥር መቀየርያ መተግበርያ");
    console.log("==================================");
    console.log('የተጻፈው \ቁጥር: ', ግእዝ_ቁጥሩ);
    console.log('በዓረብኛ ---> ', ቀያሪ(ግእዝ_ቁጥሩ));
}
ቀዳሜ();
function ቀያሪ(ግእዝ_ቁ) {
    let ቁጥሩ = 0;
    let ርቢው = 14;
    let ብዜት = 10 ** ርቢው;

    for (let ለ = 0; ለ < እልፍዮሽ.length; ለ++) {
        const እልፍ = እልፍዮሽ[ለ];

        if (ለ < እልፍዮሽ.length - 1 && ግእዝ_ቁ.includes(እልፍ)) {
            const index = ግእዝ_ቁ.indexOf(እልፍ);
            const ክፍል = ግእዝ_ቁ.slice(0, index);
            ግእዝ_ቁ = ግእዝ_ቁ.slice(index + እልፍ.length);

            if (ክፍል.length === 2) {
                const [t, o] = ክፍል;
                const አስር = አስሮ.indexOf(t) + 1;
                const አንድ = አንዶ.indexOf(o) + 1;
                ቁጥሩ += (አስር * 10 + አንድ) * ብዜት;
            } else if (ክፍል.length === 1) {
                const ch = ክፍል[0];
                const idx1 = አንዶ.indexOf(ch);
                const idx10 = አስሮ.indexOf(ch);
                if (idx1 !== -1) ቁጥሩ += (idx1 + 1) * ብዜት;
                else if (idx10 !== -1) ቁጥሩ += (idx10 + 1) * 10 * ብዜት;
            } else {
                ቁጥሩ += ብዜት;
            }

            ርቢው -= 2;
            ብዜት = 10 ** ርቢው;
        }

        // Handle the last remaining part (1–99)
        if (ለ === እልፍዮሽ.length - 1) {
            if (ግእዝ_ቁ.length === 2) {
                const አስር = አስሮ.indexOf(ግእዝ_ቁ[0]) + 1;
                const አንድ = አንዶ.indexOf(ግእዝ_ቁ[1]) + 1;
                ቁጥሩ += አስር * 10 + አንድ;
            } else if (ግእዝ_ቁ.length === 1) {
                const ch = ግእዝ_ቁ[0];
                const idx1 = አንዶ.indexOf(ch);
                const idx10 = አስሮ.indexOf(ch);
                if (idx1 !== -1) ቁጥሩ += idx1 + 1;
                else if (idx10 !== -1) ቁጥሩ += (idx10 + 1) * 10;
            }
        }
    }

    return ቁጥሩ;
}
//©2013 ዓ.ም:: ሁሉም መብቶች ተፈፃሚነት አላቸው!!! መተግበሪያችንን ስለተጠቀሙ እናመሰግናለን!
//የአልጆሪዝሙ አዘጋጅ፡ ዳግም መስፍን
