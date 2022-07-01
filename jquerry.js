(function ($) {
    jQuery.fn.my_wysiwyg = function (options) {
      
        let parametre = $.extend({
            button: ["bold", "italic" , "color", "strikethrough", "link","grow","shrink","align-left","align-right","align-center","justify","code"]
        }, options);


        $('document').ready(function () {
            $(parametre.button).each(function (elem) {

                let font_size = 2;
                    console.log(parametre.button[elem]);
                if (parametre.button[elem] == "color") {

                    $("div.editor").append('<input type="color" id="color" value="color">');
                    $("div.editor").append('<input type="button" id="submitcolor" value="Appliquer">');
                    $("input#submitcolor").click(function () {
                        var color_text = $("input#color").val();

                        document.designMode = "on";
                        document.execCommand('styleWithCSS', false, true);
                        document.execCommand("foreColor", false, color_text);
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "bold") {

                    $("div.editor").append('<input type="button" id="bold" value="Gras">');
                    $("input#bold").click(function () {

                        document.designMode = "on";

                        document.execCommand("bold");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "italic") {

                    $("div.editor").append('<input type="button" id="italic" value="Italic"> ');
                    $("input#italic").click(function () {
                        document.designMode = "on";

                        document.execCommand("italic");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "strikethrough") {
                    $("div.editor").append(' <input type="button" id="strikethrough" value="Barrer"> ');
                    $("input#strikethrough").click(function () {
                        document.designMode = "on";
                        document.execCommand("strikethrough");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "link") {

                    $("div.editor").append('<input type="button" id="link" value="Lien">');
                    $("input#link").click(function () {
                        var linkURL = prompt('Enter a URL:', 'http://');
                        var sText = document.getSelection();
                        document.designMode = "on";
                        document.execCommand('insertHTML', false, '<a contenteditable="false" href="' + linkURL + '" target="_blank">' + sText + '</a>');
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "grow") {

                    $("div.editor").append('<input type="button" id="grow" value="Aggrandir"> ');
                    $("input#grow").click(function () {
                        font_size += 1;
                        
                        document.designMode = "on";
                        document.execCommand("fontSize", false, font_size);
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "shrink") {

                    $("div.editor").append('<input type="button" id="shrink" value="Rapticire"> ');
                    $("input#shrink").click(function () {
                        font_size -= 1;
                        
                        document.designMode = "on";
                        document.execCommand("fontSize", false, font_size);
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "align-left") {

                    $("div.editor").append('<input type="button" id="align-left" value="Aligner à gauche">');
                    $("input#align-left").click(function () {
                        document.designMode = "on";
                        document.execCommand("justifyLeft");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "align-right") {

                    $("div.editor").append(' <input type="button" id="align-right" value="Aligner à droite">');
                    $("input#align-right").click(function () {
                        document.designMode = "on";
                        document.execCommand("justifyRight");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "align-center") {
                    $("div.editor").append('<input type="button" id="align-center" value="Centrer">');
                    $("input#align-center").click(function () {
                        document.designMode = "on";
                        document.execCommand("justifyCenter");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "justify") {

                    $("div.editor").append('<input type="button" id="justify" value="Justifier">');
                    $("input#justify").click(function () {
                        document.designMode = "on";
                        document.execCommand("justifyFull");
                        document.designMode = "off";
                    })
                }

                if (parametre.button[elem] == "code") {

                    $("div.editor").append('<input type="button" id="code" value="Code"> ');
                    $("input#code").click(function () {
                        var sText = document.getSelection();
                        document.designMode = "on";
                        document.execCommand('insertHTML', false, '<code contenteditable="false">' + sText + '</code>');
                        document.designMode = "off";
                    })
                }

            })

        })
    }
})(jQuery)



