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
    var ቁጥሩ = 0;
    var ከ_እልፍ_በፊት = '';
    var ርቢው = 14;
    var ብዜት = Math.pow(10, ርቢው);
    var አስሩ_ወአንዱ = '';
    var ቀዲሙ = ግእዝ_ቁ;
    for (var ለ = 0; ለ < እልፍዮሽ.length; ለ++) {
        if (ለ < እልፍዮሽ.length - 1) {
            if (ግእዝ_ቁ.includes(እልፍዮሽ[ለ])) {
                ከ_እልፍ_በፊት = ግእዝ_ቁ.slice(0, ግእዝ_ቁ.indexOf(እልፍዮሽ[ለ]) + እልፍዮሽ[ለ].length);
                ግእዝ_ቁ = ግእዝ_ቁ.slice(ግእዝ_ቁ.indexOf(እልፍዮሽ[ለ]) + እልፍዮሽ[ለ].length, ግእዝ_ቁ.length);
                if (ከ_እልፍ_በፊት.length - እልፍዮሽ[ለ].length == 2) {
                    አስሩ_ወአንዱ = ከ_እልፍ_በፊት.slice(0, 2);
                    ቁጥሩ += (((አስሮ.indexOf(አስሩ_ወአንዱ[0]) + 1) * 10) + (አንዶ.indexOf(አስሩ_ወአንዱ[1]) + 1)) * ብዜት;
                }
                else if (ከ_እልፍ_በፊት.length - እልፍዮሽ[ለ].length == 1) {
                    አስሩ_ወአንዱ = ከ_እልፍ_በፊት[0];
                    for (var ሀ = 0; ሀ < አንዶ.length; ሀ++) {
                        if (አስሩ_ወአንዱ == አንዶ[ሀ]) {
                            ቁጥሩ += (ሀ + 1) * ብዜት;
                            break;
                        }
                        else if (አስሩ_ወአንዱ == አስሮ[ሀ]) {
                            ቁጥሩ += (ሀ + 1) * 10 * ብዜት;
                            break;
                        }
                    }
                }
                else {
                    ቁጥሩ += ብዜት;
                }
            }
            ርቢው -= 2;
            ብዜት = Math.pow(10, ርቢው);
        }
        else if (ለ == እልፍዮሽ.length - 1) {
            if (ግእዝ_ቁ.length == 2) {
                ቁጥሩ += (((አስሮ.indexOf(ግእዝ_ቁ[0]) + 1) * 10) + (አንዶ.indexOf(ግእዝ_ቁ[1]) + 1));
            }
            else if (ግእዝ_ቁ.length == 1) {
                for (var ሀ = 0; ሀ < አንዶ.length; ሀ++) {
                    if (ግእዝ_ቁ == አንዶ[ሀ]) {
                        ቁጥሩ += (ሀ + 1);
                        break;
                    }
                    else if (ግእዝ_ቁ == አስሮ[ሀ]) {
                        ቁጥሩ += (ሀ + 1) * 10;
                        break;
                    }
                }
            }
        }
    }
    return ቁጥሩ;
}
//©2013 ዓ.ም:: ሁሉም መብቶች ተፈፃሚነት አላቸው!!! መተግበሪያችንን ስለተጠቀሙ እናመሰግናለን!
//የአልጆሪዝሙ አዘጋጅ፡ ዳግም መስፍን
