var lang = "de";

var dict = {
    "forecastTitle": "aufwin.de | Vorhersage",
    "legalNotice": "Impressum",
    "privacyPolicy": "Datenschutz",
    "attributionToggle": "Kartendaten",
    "modelDaySelect_title": "Tag wählen",
    "timeSelect_title": "Zeit wählen",
    "parameterSelect_title": "Parameter wählen",
    "parameterDetails_title": "Details zum ausgewählten Parameter anzeigen",
    "parameterDetails_summary": "Details",
    "parameterCategory_thermal_title": "Thermik und Grenzschicht",
    "parameterCategory_cloud_title": "Wolken",
    "parameterCategory_wind_title": "Wind",
    "parameterCategory_wave_title": "Vertikalbewegung",
    "parameterCategory_general_title": "Allgemeine Messgrößen",
    "parameterCategory_experimental_title": "Experimentelle Parameter",
    "opacityIcon_title": "Deckkraft einstellen",
    "opacityDecreaseButton_title": "Deckkraft verringern",
    "opacityIncreaseButton_title": "Deckkraft erhöhen",
    "soundingCheckbox_label": "Orte mit Vertikalprofilen (Temps) auf Karte anzeigen",
    "meteogramCheckbox_label": "Orte mit Meteogrammen auf Karte anzeigen",
    "crosssection": "Vertikalquerschnitt",
    "crosssectionHelp": "Auf der Karte zwei mal klicken, um Start- und Endpunkt des Vertikalquerschnittes auszuwählen. Zum Deaktivieren des Querschnitts-Tools die obige Schaltfläche nochmals drücken.",
    "crosssectionError": "Konnte Vertikalquerschnitt nicht erstellen. Sind Start- und Endpunkt innerhalb des Vorhersagebereiches?",
    "sounding": "Vertikalprofil",
    "soundingHelp": "Ort für Vertikalprofil auf der Karte auswählen. Zum Deaktivieren des Vertikalprofil-Tools die obige Schaltfläche nochmals drücken.",
    "soundingError": "Konnte Vertikalprofil nicht erstellen. Ist der Ort innerhalb des Vorhersagebereiches?",
    "Topography": "Topografie",
    "Grayscale": "Graustufen",
    "Airspace": "Lufträume",
    "Soundings": "Temps",
    "Meteograms": "Meteogramme",
    "Show in separate window": "Separat anzeigen",
    "Model run": "Modelllauf vom",
    "for": "für",
    "metadataMissing": "Metadaten nicht gefunden",
    "dataMissing": "Daten nicht gefunden",
    "Today": "Heute",
    "Tomorrow": "Morgen",
    "Monday": "Montag",
    "Tuesday": "Dienstag",
    "Wednesday": "Mittwoch",
    "Thursday": "Donnerstag",
    "Friday": "Freitag",
    "Saturday": "Samstag",
    "Sunday": "Sonntag",
    "Mar": "Mär",
    "May": "Mai",
    "Oct": "Okt",
    "Dec": "Dez",
    "CET": "MEZ",
    "CEST": "MESZ",
    "wstar.longname": "Thermikstärke",
    "wstar.description": "Durchschnittliche trockene Thermikstärke auf halber Grenzschichthöhe. Das Eigensinken muss abgezogen werden, um den am Vario angezeigten Wert zu erhalten. Bei konvektiver Wolkenbildung ist eine größere Thermikstärke als die hier vorhergesagte zu erwarten, da Kondensation zusätzlichen Auftrieb erzeugt.",
    "bsratio.longname": "Auftrieb/Scher-Verhältnis",
    "bsratio.description": "Verhältnis zwischen thermisch bedingtem Auftrieb und vertikaler Windscherung. Falls dieses Verhältnis klein ist, ist mit zerrissener Thermik zu rechnen - unter 5 mit kaum nutzbarer. Bei konvektiver Wolkenbildung ist das tatsächliche Auftrieb/Scher-Verhältnis besser als hier vorhergesagt.",
    "wstar_bsratio.longname": "Thermikstärke & Auftrieb/Scher-Verhältnis",
    "wstar_bsratio.description": "Zusammengesetzter Plot aus Thermikstärke und Auftrieb/Scher-Verhältnis. Bereiche mit geringem Auftrieb/Scher-Verhältnis sind hell (3 < A/S < 6) bzw. dunkel (A/S < 3) schattiert dargestellt.",
    "hglider.longname": "Nutzbare Thermikhöhe (MSL)",
    "hglider.description": "Nutzbare Thermikhöhe, d.h. das Minimum aus Höhe kritischer Aufwindstärke, Cumulus-Wolkenbasis und Überentwicklungs-Wolkenbasis.",
    "dglider.longname": "Nutzbare Thermikhöhe (AGL)",
    "dglider.description": "Nutzbare Thermikhöhe (MSL) minus Geländehöhe.",
    "hwcrit.longname": "Höhe kritischer Aufwindstärke (MSL)",
    "hwcrit.description": "Höhe, in der die durchschnittliche Thermikstärke unter 225 ft/min (= 1,14 m/s) fällt, was die nutzbare Thermikhöhe abschätzt. Bei konvektiver Wolkenbildung ist diese allerdings durch die Wolkenbasis limitiert.",
    "dwcrit.longname": "Höhe kritischer Aufwindstärke (AGL)",
    "dwcrit.description": "Höhe kritischer Aufwindstärke (MSL) minus Geländehöhe.",
    "hbl.longname": "Grenzschichthöhe (MSL)",
    "hbl.description": "Höhe der sog. Peplosphäre, in der turbulente Durchmischung durch orographische Einflüsse, d.h. auch durch thermische Konvektion stattfindet. Über flachem Gelände ist die nutzbare Thermikhöhe u.a. durch das Eigensinken kleiner. Bei konvektiver Wolkenbildung und damit zusätzlicher Aufwindstärke ist die tatsächliche Grenzschichthöhe größer als hier vorhergesagt. Dennoch ist die nutzbare Thermikhöhe dann durch die Wolkenbasis limitiert. Falls die turbulente Durchmischung aus vertikaler Windscherung resultiert (siehe Auftrieb/Scher-Verhältnis), ist dieser Parameter für den Segelflug wenig aussagekräftig.",
    "dbl.longname": "Grenzschichthöhe (AGL)",
    "dbl.description": "Grenzschichthöhe (MSL) minus Geländehöhe",
    "bltopvariab.longname": "Unsicherheit der Grenzschichthöhe",
    "bltopvariab.description": "Unsicherheit der Grenzschichthöhe, abgeschätzt durch die hypothetische Erhöhung der vorhergesagten Oberflächentemperatur um 4°F (= 2,2°C). Höhere Werte können auf Bildungspotential lokaler Thermikhotspots hindeuten. Kleine Werte dieses Parameters resultieren oft aus stabilen (Inversions-)Schichten, die eine scharfe Begrenzung der Grenzschichtoberseite vorgeben.",
    "wblmaxmin.longname": "Kollektive Vertikalbewegung (Konvergenz/Divergenz)",
    "wblmaxmin.description": "Maximale kollektive Vertikalbewegung innerhalb der Grenzschicht, ausgelöst durch konvergente oder divergente Windströmung. Bei positiven Werten können sich Konvergenzlinien und damit Wolkenstraßen bilden. Bei hohem CAPE können außerdem lokale Gewitter ausgelöst werden. Negative Werte (Divergenz) sind assoziiert mit der Bildung von Inversionen und lokal schlechterer Thermik.",
    "zwblmaxmin.longname": "Höhe der maximalen Vertikalbewegung",
    "zwblmaxmin.description": "Höhe (MSL) in der maximale kollektive Vertikalbewegung durch Konvergenz oder Divergenz stattfindet.",
    "sfcsunpct.longname": "Normierte Sonneneinstrahlung",
    "sfcsunpct.description": "Sonnenstrahlung, welche die Erdoberfläche tatsächlich erreicht dividiert durch den theoretisch erreichbaren Wert in einer trockenen Atmosphäre (ohne Wolken oder Wasserdampf). Dieser Parameter ist auch ein Maß für den Bewölkungsgrad (wobei auch durch Wolken ein gewisser Teil der Sonnenstrahlung dringen kann)",
    "sfcshf.longname": "Oberflächenwärmetransfer",
    "sfcshf.description": "Wärme, die vom Boden in die Atmosphäre abgegeben wird und dadurch thermische Konvektion auslösen kann. Dieser Parameter kann hilfreich sein, um Gebiete hoher Thermikaffinität im Laufe des Tages zu identifizieren.",
    "sfctemp.longname": "Temperatur",
    "sfctemp.description": "Temperatur in 2m Höhe. Dieser Parameter kann gut mit der gemessenen tatsächlichen Temperatur verglichen werden, um die Genauigkeit des Simulationslaufes abzuschätzen. Bei deutlich niedrigeren vorherrschenden Temperaturen sind die thermischen Bedingungen i.A. schlechter als vorhergesagt.",
    "sfcdewpt.longname": "Taupunkt",
    "sfcdewpt.description": "Taupunkt in 2m Höhe. Wie auch die Temperatur kann dieser Parameter als Genauigkeitskriterium dienen. Bei niedrigeren tatsächlichen Werten als vorhergesagt ist eine geringere Wolkenentwicklung in der Grenzschicht zu erwarten.",
    "mslpress.longname": "Luftdruck",
    "mslpress.description": "Luftdruck (MSL)",
    "sfcwind0.longname": "Wind (2m)",
    "sfcwind0.description": "Windrichtung und -geschwindigkeit in 2m Höhe.",
    "sfcwind.longname": "Wind (10m)",
    "sfcwind.description": "Windrichtung und -geschwindigkeit in 10m Höhe.",
    "blwind.longname": "Wind (Grenzschichtdurchschnitt)",
    "blwind.description": "Windrichtung und -geschwindigkeit des über die Grenzschicht vektorgemittelten Winds. Dieser Parameter kann irreführend sein, falls es große Windrichtungsunterschiede in verschiedenen Höhen gibt.",
    "bltopwind.longname": "Wind (Grenzschicht-Top)",
    "bltopwind.description": "Windrichtung und -geschwindigkeit an der Oberseite der Grenzschicht.",
    "blwindshear.longname": "Grenzschicht-Windscherung",
    "blwindshear.description": "Betrag der vektoriellen Differenz zwischen Wind an Oberseite der Grenzschicht und in Bodennähe.",
    "zsfclcldif.longname": "Cumulus-Potential",
    "zsfclcldif.description": "Potential für die Entwicklung von kompakter Quellbewölkung, berechnet durch die Differenz zwischen der Grenzschichthöhe und der Cumulus-Wolkenbasis.",
    "zsfclcl.longname": "Cumulus-Wolkenbasis",
    "zsfclcl.description": "Wolkenbasis für kompakte und alleinstehende (nicht ausbreitende) Quellbewölkung, berechnet durch das Lifting Condensation Level von erdoberflächennahen Luftmassen. Dies ist die Höhe, ab der ein vom Boden adiabatisch aufsteigendes und abkühlendes Luftpaket seinen Taupunkt erreicht und es zur Wolkenbildung durch Kondensation kommt.",
    "zsfclclmask.longname": "Cumulus-Wolkenbasis wo Potential > 0",
    "zsfclclmask.description": "Cumulus-Wolkenbasis nur in Regionen mit positivem Cumulus-Potential dargestellt.",
    "zblcldif.longname": "Überentwicklungs-Potential",
    "zblcldif.description": "Potential für die Entwicklung ausbreitender oder auftürmender Bewölkung, berechnet durch die Differenz zwischen Grenzschichthöhe und Überentwicklungs-Wolkenbasis.",
    "zblcl.longname": "Überentwicklungs-Wolkenbasis",
    "zblcl.description": "Wolkenbasis für sich an der Grenzschichtoberseite ausbreitende oder auftürmende Bewölkung. Im Gegensatz zur Cumulus-Wolkenbasis wird hier das sog. Boundary Layer Condensation Level genutzt, das auf der mittleren Luftfeuchtigkeit der Grenzschicht basiert.",
    "zblclmask.longname": "Überentwicklungs-Wolkenbasis wo Potential > 0",
    "zblclmask.description": "Überentwicklungs-Wolkenbasis nur in Regionen mit positivem Überentwicklungs-Potential dargestellt.",
    "blicw.longname": "Integrierter Wassergehalt Grenzschicht",
    "blicw.description": "Kumulativer Wassergehalt pro Einheitsfläche vom Boden bis zur Grenzschichtoberseite.",
    "blcwbase.longname": "Grenzschicht-Wolkenbasis wo integrierter Wassergehalt > 0",
    "blcwbase.description": "Wolkenbasis der Grenzschichtbewölkung nur dort dargestellt, wo der integrierte Wassergehalt in der Grenzschicht größer 0 ist.",
    "blcloudpct.longname": "Bewölkungsgrad - Grenzschicht",
    "blcloudpct.description": "Bewölkungsgrad durch Wolken in der Grenzschicht.",
    "cfracl.longname": "Bewölkungsgrad - Niedrige Wolken",
    "cfracl.description": "Bewölkungsgrad für niedrige Wolken zwischen 300m AGL und 2000m AGL. Kondensierende Luftfeuchtigkeit unter 300m AGL zählt als Nebel.",
    "cfracm.longname": "Bewölkungsgrad - Mittlere Wolken",
    "cfracm.description": "Bewölkungsgrad für Wolken in mittlerer Höhe zwischen 2000m AGL und 6000m AGL.",
    "cfrach.longname": "Bewölkungsgrad - Hohe Wolken",
    "cfrach.description": "Bewölkungsgrad für hohe Wolken über 6000m AGL.",
    "clouds.longname": "Bewölkungsgrad - Gesamt",
    "clouds.description": "Komposit aus tiefer (rot), mittlerer (grün) und hoher (blau) Bewölkung",
    "rain1.longname": "Regenmenge",
    "rain1.description": "Stündliche Niederschlagsmenge.",
    "cape.longname": "CAPE",
    "cape.description": "Convective Available Potential Energy (CAPE), welche ein Maß für atmosphärische Instabilität ist und bei hohen Werten konvektive Wolkenbildung bis in die obere Troposphäre und damit zusammenhängend starke Aufwinde und Gewitter kennzeichnen kann.",
    "press1000.longname": "Vertikalbewegung 1000mb",
    "press1000.description": "Windfähnchen, die Windrichtung- und geschwindigkeit in einer Höhe von 1000mb zeigen, sowie Vertikalbewegung in dieser Höhe.",
    "press950.longname": "Vertikalbewegung in 950mb",
    "press950.description": "Windfähnchen, die Windrichtung- und geschwindigkeit in einer Höhe von 950mb zeigen, sowie Vertikalbewegung in dieser Höhe.",
    "press850.longname": "Vertikalbewegung in 850mb",
    "press850.description": "Windfähnchen, die Windrichtung- und geschwindigkeit in einer Höhe von 850mb zeigen, sowie Vertikalbewegung in dieser Höhe.",
    "press700.longname": "Vertikalbewegung in 700mb",
    "press700.description": "Windfähnchen, die Windrichtung- und geschwindigkeit in einer Höhe von 700mb zeigen, sowie Vertikalbewegung in dieser Höhe.",
    "press500.longname": "Vertikalbewegung in 500mb",
    "press500.description": "Windfähnchen, die Windrichtung- und geschwindigkeit in einer Höhe von 500mb zeigen, sowie Vertikalbewegung in dieser Höhe.",
    "pfd_tot.longname": "Potentielle Flugdistanz",
    "pfd_tot.description": "Abschätzung der potentiellen Flugdistanz mit der Polare eines Discus mit 100kg Ballast."
};
