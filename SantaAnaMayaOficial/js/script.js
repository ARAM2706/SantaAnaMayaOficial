function sh_menu(event) {
    var ide = event.target.id;
    switch (ide) {
        case 'btn_inicio':
            location.reload();
            break;
        case 'btn_municipio':
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            } else {
                document.getElementById('municipio').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            }
            if (document.getElementById('directorio').style.display == 'flex' ? true : false) {
                document.getElementById('directorio').style.display = 'none'
            }
            if (document.getElementById('informe').style.display == 'flex' ? true : false) {
                document.getElementById('informe').style.display = 'none'
            }
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            }
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            }
            break;
        case 'btn_gobierno':
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            } else {
                document.getElementById('gobierno').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            }
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            }
            if (document.getElementById('directorio').style.display == 'flex' ? true : false) {
                document.getElementById('directorio').style.display = 'none'
            }
            if (document.getElementById('informe').style.display == 'flex' ? true : false) {
                document.getElementById('informe').style.display = 'none'
            }
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            }
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            }
            break;
        case 'btn_argen':
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            } else {
                document.getElementById('ArGen').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('directorio').style.display == 'flex' ? true : false) {
                document.getElementById('directorio').style.display = 'none'
            }
            if (document.getElementById('informe').style.display == 'flex' ? true : false) {
                document.getElementById('informe').style.display = 'none'
            }
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            }
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            }
            break;
        case 'btn_directorio':
            if (document.getElementById('directorio').style.display == 'flex' ? true : false) {
                document.getElementById('directorio').style.display = 'none'
            } else {
                document.getElementById('directorio').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            }
            if (document.getElementById('informe').style.display == 'flex' ? true : false) {
                document.getElementById('informe').style.display = 'none'
            }
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            }
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            }
            break;
        case 'btn_informe':
            if (document.getElementById('informe').style.display == 'flex' ? true : false) {
                document.getElementById('informe').style.display = 'none'
            } else {
                document.getElementById('informe').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            }
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            }
            break;
        case 'btn_organigrama':
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            } else {
                document.getElementById('organigrama').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            }
            if (document.getElementById('directorio').style.display == 'flex' ? true : false) {
                document.getElementById('directorio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            }
            break;
        case 'btn_buzon':
            if (document.getElementById('buzon').style.display == 'flex' ? true : false) {
                document.getElementById('buzon').style.display = 'none'
            } else {
                document.getElementById('buzon').style.display = 'flex'
                document.getElementById('inicio').style.display = 'none'
            }
            if (document.getElementById('municipio').style.display == 'flex' ? true : false) {
                document.getElementById('municipio').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('ArGen').style.display == 'flex' ? true : false) {
                document.getElementById('ArGen').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            if (document.getElementById('organigrama').style.display == 'flex' ? true : false) {
                document.getElementById('organigrama').style.display = 'none'
            }
            if (document.getElementById('gobierno').style.display == 'flex' ? true : false) {
                document.getElementById('gobierno').style.display = 'none'
            }
            break;
    }

}

function sh_pr(event) {
    var ide = event.target.id;
    switch (ide) {
        case 'btn_principal':

            if (document.getElementById('principal').style.display == 'flex' ? true : false) {
                document.getElementById('principal').style.display = 'none'
            } else {
                document.getElementById('principal').style.display = 'flex'
            }
            if (document.getElementById('sindico').style.display == 'flex' ? true : false) {
                document.getElementById('sindico').style.display = 'none'
            }
            if (document.getElementById('consejo').style.display == 'flex' ? true : false) {
                document.getElementById('consejo').style.display = 'none'
            }
            if (document.getElementById('directivos').style.display == 'flex' ? true : false) {
                document.getElementById('directivos').style.display = 'none'
            }
            if (document.getElementById('coordi').style.display == 'flex' ? true : false) {
                document.getElementById('coordi').style.display = 'none'
            }
            if (document.getElementById('secretario').style.display == 'flex' ? true : false) {
                document.getElementById('secretario').style.display = 'none'
            }
            break;
        case 'btn_sindico':
            if (document.getElementById('sindico').style.display == 'flex' ? true : false) {
                document.getElementById('sindico').style.display = 'none'
            } else {
                document.getElementById('sindico').style.display = 'flex'
            }
            if (document.getElementById('principal').style.display == 'flex' ? true : false) {
                document.getElementById('principal').style.display = 'none'
            }
            if (document.getElementById('consejo').style.display == 'flex' ? true : false) {
                document.getElementById('consejo').style.display = 'none'
            }
            if (document.getElementById('directivos').style.display == 'flex' ? true : false) {
                document.getElementById('directivos').style.display = 'none'
            }
            if (document.getElementById('coordi').style.display == 'flex' ? true : false) {
                document.getElementById('coordi').style.display = 'none'
            }
            if (document.getElementById('secretario').style.display == 'flex' ? true : false) {
                document.getElementById('secretario').style.display = 'none'
            }
            break;
        case 'btn_consejo':
            if (document.getElementById('consejo').style.display == 'flex' ? true : false) {
                document.getElementById('consejo').style.display = 'none'
            } else {
                document.getElementById('consejo').style.display = 'flex'
            }
            if (document.getElementById('sindico').style.display == 'flex' ? true : false) {
                document.getElementById('sindico').style.display = 'none'
            }
            if (document.getElementById('principal').style.display == 'flex' ? true : false) {
                document.getElementById('principal').style.display = 'none'
            }
            if (document.getElementById('directivos').style.display == 'flex' ? true : false) {
                document.getElementById('directivos').style.display = 'none'
            }
            if (document.getElementById('coordi').style.display == 'flex' ? true : false) {
                document.getElementById('coordi').style.display = 'none'
            }
            if (document.getElementById('secretario').style.display == 'flex' ? true : false) {
                document.getElementById('secretario').style.display = 'none'
            }
            break;
        case 'btn_directivos':
            if (document.getElementById('directivos').style.display == 'flex' ? true : false) {
                document.getElementById('directivos').style.display = 'none'
            } else {
                document.getElementById('directivos').style.display = 'flex'
            }
            if (document.getElementById('sindico').style.display == 'flex' ? true : false) {
                document.getElementById('sindico').style.display = 'none'
            }
            if (document.getElementById('consejo').style.display == 'flex' ? true : false) {
                document.getElementById('consejo').style.display = 'none'
            }
            if (document.getElementById('principal').style.display == 'flex' ? true : false) {
                document.getElementById('principal').style.display = 'none'
            }
            if (document.getElementById('coordi').style.display == 'flex' ? true : false) {
                document.getElementById('coordi').style.display = 'none'
            }
            if (document.getElementById('secretario').style.display == 'flex' ? true : false) {
                document.getElementById('secretario').style.display = 'none'
            }
            break;
        case 'btn_coordi':
            if (document.getElementById('coordi').style.display == 'flex' ? true : false) {
                document.getElementById('coordi').style.display = 'none'
            } else {
                document.getElementById('coordi').style.display = 'flex'
            }
            if (document.getElementById('sindico').style.display == 'flex' ? true : false) {
                document.getElementById('sindico').style.display = 'none'
            }
            if (document.getElementById('consejo').style.display == 'flex' ? true : false) {
                document.getElementById('consejo').style.display = 'none'
            }
            if (document.getElementById('directivos').style.display == 'flex' ? true : false) {
                document.getElementById('directivos').style.display = 'none'
            }
            if (document.getElementById('principal').style.display == 'flex' ? true : false) {
                document.getElementById('principal').style.display = 'none'
            }
            if (document.getElementById('secretario').style.display == 'flex' ? true : false) {
                document.getElementById('secretario').style.display = 'none'
            }
            break;
        case 'btn_secretario':
            if (document.getElementById('secretario').style.display == 'flex' ? true : false) {
                document.getElementById('secretario').style.display = 'none'
            } else {
                document.getElementById('secretario').style.display = 'flex'
            }
            if (document.getElementById('sindico').style.display == 'flex' ? true : false) {
                document.getElementById('sindico').style.display = 'none'
            }
            if (document.getElementById('consejo').style.display == 'flex' ? true : false) {
                document.getElementById('consejo').style.display = 'none'
            }
            if (document.getElementById('directivos').style.display == 'flex' ? true : false) {
                document.getElementById('directivos').style.display = 'none'
            }
            if (document.getElementById('principal').style.display == 'flex' ? true : false) {
                document.getElementById('principal').style.display = 'none'
            }
            if (document.getElementById('coordi').style.display == 'flex' ? true : false) {
                document.getElementById('coordi').style.display = 'none'
            }
            break;
    }

}

function generarPDF() {
    const doc = new jsPDF();

    // Obtiene el HTML del formulario
    const formulario = document.getElementById("formulario");
    const html = formulario.outerHTML;

    // Genera el PDF a partir del HTML del formulario
    doc.html(html, {
        callback: function() {
            // Guarda el PDF en tu equipo
            doc.save("formulario.pdf");
        },
    });
}