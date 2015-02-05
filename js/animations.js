//Main Custom JS File

//Opening animation
window.onload = (function () { 
                    $('#about').slideDown(200, function () {
                        $('#experience').slideDown(200, function () {
                            $('#projects').slideDown(200, function () {
                                $('#contact').slideDown(200);
                            });
                        });
                    });
                });

//Section click animations
//About Section
$(".about-link").click(function () {
    $('#about').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
        $('#main-content').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
            $('footer').fadeOut(200, function () {
                $('#about-content').fadeIn(200);
            });
        });
    });
});

//Experience Section
$(".experience-link").click(function () {
    $('#experience').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
        $('#main-content').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
            $('footer').fadeOut(200, function () {
                $('#experience-content').fadeIn(200);
            });
        });
    });
});

//Projects Section
$(".projects-link").click(function () {
    $('#projects').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
        $('#main-content').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
            $('footer').fadeOut(200, function () {
                $('#projects-content').fadeIn(200);
            });
        });
    });
});

//Contact Section
$(".contact-link").click(function () {
    $('#contact').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
        $('#main-content').animo({animation: 'fadeOutLeft', duration: 0.5, keep: true}, function () {
            $('footer').fadeOut(200, function () {
                $('#contact-content').fadeIn(200);
            });
        });
    });
});

//CLose section animations
//About section
 $('.close').click(function () {
        $('#about-content').fadeOut(300, function () {
            $('#about').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                $('#main-content').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                    $('footer').fadeIn(100);     
                });
            });
        });
 });

//Experience section
 $('.close').click(function () {
        $('#experience-content').fadeOut(300, function () {
            $('#experience').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                $('#main-content').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                    $('footer').fadeIn(100);     
                });
            });
        });
 });

//Projects section
 $('.close').click(function () {
        $('#projects-content').fadeOut(300, function () {
            $('#projects').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                $('#main-content').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                    $('footer').fadeIn(100);     
                });
            });
        });
 });

//Contact section
 $('.close').click(function () {
        $('#contact-content').fadeOut(300, function () {
            $('#contact').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                $('#main-content').animo({animation: 'fadeInRight', duration: 0.5}, function () {
                    $('footer').fadeIn(100);     
                });
            });
        });
 });

