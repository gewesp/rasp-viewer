var lang = "en";

var dict = {
    "forecastTitle": "aufwin.de | Forecast",
    "legalNotice": "Legal Notice",
    "privacyPolicy": "Privacy Policy",
    "attributionToggle": "Map Data",
    "modelDaySelect_title": "Select day",
    "timeSelect_title": "Select time",
    "parameterSelect_title": "Select parameter",
    "parameterDetails_title": "Show details of the selected parameter",
    "parameterDetails_summary": "Details",
    "parameterCategory_thermal_title": "Thermals and Boundary Layer",
    "parameterCategory_cloud_title": "Clouds",
    "parameterCategory_wind_title": "Wind",
    "parameterCategory_wave_title": "Vertical Motion",
    "parameterCategory_general_title": "General Parameters",
    "parameterCategory_experimental_title": "Experimental Parameters",
    "opacityIcon_title": "Opacity control",
    "opacityDecreaseButton_title": "Decrease opacity",
    "opacityIncreaseButton_title": "Increase opacity",
    "soundingCheckbox_label": "Show sounding locations on map",
    "meteogramCheckbox_label": "Show meteogram locations on map",
    "crosssection": "Cross Section",
    "crosssectionHelp": "Click twice on the map to select the start and end point of the cross section. Press the above button again to deactivate the cross section tool.",
    "crosssectionError": "Could not create cross section. Make sure that start and end point are inside the forecast domain.",
    "sounding": "Sounding",
    "soundingHelp": "Click on the map to show a sounding diagram for this location. Press the above button again to deactivate the sounding tool.",
    "soundingError": "Could not create sounding. Make sure that the point is inside the forecast domain.",
    "Topography": "Topography",
    "Grayscale": "Grayscale",
    "Airspace": "Airspace",
    "Soundings": "Soundings",
    "Meteograms": "Meteograms",
    "Show in separate window": "Show in separate window",
    "Model run": "Model run",
    "for": "for",
    "metadataMissing": "Metadata not found",
    "dataMissing": "Data not found",
    "Today": "Today",
    "Tomorrow": "Tomorrow",
    "Monday": "Monday",
    "Tuesday": "Tuesday",
    "Wednesday": "Wednesday",
    "Thursday": "Thursday",
    "Friday": "Friday",
    "Saturday": "Saturday",
    "Sunday": "Sunday",
    "Mar": "Mar",
    "May": "May",
    "Oct": "Oct",
    "Dec": "Dec",
    "CET": "CET",
    "CEST": "CEST",
    "wstar.longname": "Thermal Updraft Velocity",
    "wstar.description": "Average dry thermal updraft strength near mid boundary layer height. Subtract glider descent rate to get average vario reading for cloudless thermals. Updraft strengths will be stronger than forecast if convective clouds are present since cloud condensation adds buoyancy aloft (cloudsuck).",
    "bsratio.longname": "Buoyancy/Shear Ratio",
    "bsratio.description": "Ratio of convectively driven updraft strength and vertical wind shear. Thermals may be broken up by vertical wind shear (i.e. wind changing with height) and unworkable if B/S ratio is 5 or less. If convective clouds are present, the actual Buoyancy/Shear Ratio will be better than forecast due to the neglect of cloudsuck.",
    "wstar_bsratio.longname": "Thermal Updraft Velocity & Buoyancy/Shear Ratio",
    "wstar_bsratio.description": "Compound plot of Thermal Updraft Velocity and Buoyancy/Shear Ratio. Regions with small Buoyancy/Shear Ratio are marked by a light (3 < B/S < 6) or dark (B/S < 3) shadow.",
    "hglider.longname": "Thermalling Height",
    "hglider.description": "Usable thermalling height, calculated as the minimum of Height of Critical Updraft Strength, Cumulus Cloudbase and Overdevelopment Cloudbase.",
    "dglider.longname": "Thermalling Depth",
    "dglider.description": "Thermalling Height compensated for topography.",
    "hwcrit.longname": "Height of Critical Updraft Strength",
    "hwcrit.description": "Height at which the average dry updraft strength drops below 225 ft/min (= 1,14 m/s) and thus giving an estimate of the usable thermalling height. In the presence of clouds the latter may instead be limited by the cloud base.",
    "dwcrit.longname": "Depth of Critical Updraft Strength",
    "dwcrit.description": "Height of Critical Updraft Strength compensated for topography.",
    "hbl.longname": "Boundary Layer Height",
    "hbl.description": "Height of the top of the boundary layer, which for thermal convection is the average top of a dry thermal. Over flat terrain, maximum thermalling heights will be lower due to the glider descent rate and other factors. In the presence of clouds (which release additional buoyancy aloft, creating cloudsuck) the updraft top will be above this forecast, but the maximum thermalling height will then be limited by the cloud base. Further, when the mixing results from shear turbulence rather than thermal mixing (see Buoyancy/Shear Ratio), this parameter is not useful for glider flying.",
    "dbl.longname": "Boundary Layer Depth",
    "dbl.description": "Boundary Layer Height compensated for topography.",
    "bltopvariab.longname": "Boundary Layer Height Uncertainty",
    "bltopvariab.description": "Uncertainty (variability) of the Boundary Layer Height prediction resulting from meteorological variations. Specifically, it gives the expected increase of Boundary Layer Height should the actual surface temperature be 4°F (= 2,2°C) warmer than forecast. Larger values indicate greater uncertainty/variability and thus better thermalling over local hot spots or small-scale topography not resolved by the model. Small values often result from the presence of a stable (inversion) layer capping and limiting thermal growth.",
    "wblmaxmin.longname": "Collective Up/Down Motion (Convergence/Divergence)",
    "wblmaxmin.description": "Maximum grid-area-averaged extensive upward or downward motion within the boundary layer created by horizontal wind convergence. Positive convergence is associated with local small-scale convergence lines and cloud streets. If CAPE is also large, thunderstorms can be triggered. Negative values (divergence) indicate subsiding vertical motion, creating low-level inversions which limit thermalling heights.",
    "zwblmaxmin.longname": "Height of Boundary Layer Max. Up/Down",
    "zwblmaxmin.description": "Height above sea level of the values shown in Boundary Layer Convergence/Divergence.",
    "sfcsunpct.longname": "Normalized Surface Sun",
    "sfcsunpct.description": "Solar radiation reaching the surface divided by the amount which would reach the surface in a dry atmosphere (i.e. in the absence of clouds and water vapor). This parameter indicates the degree of cloudiness (although some amount of solar radiation can still passes through clouds).",
    "sfcshf.longname": "Surface Heating",
    "sfcshf.description": "Heat transferred into the atmosphere due to solar heating of the ground, potentially creating thermals. This parameter can be helpful in discovering regions with high affinity for thermal convection.",
    "sfctemp.longname": "Surface Temperature",
    "sfctemp.description": "The temperature at a height of 2m above ground level. This can be compared to observed surface temperatures as an indication of model simulation accuracy; e.g. if observed surface temperatures are significantly below those of the forecast, then soaring conditions will be poorer than predicted.",
    "sfcdewpt.longname": "Surface Dew Point",
    "sfcdewpt.description": "The dew point temperature at a height of 2m above ground level. This can be compared to observed surface dew point temperatures as an indication of model simulation accuracy; e.g. if observed surface dew point temperatures are significantly below those forecast, then boundary layer cloud formation will be poorer than predicted. ",
    "mslpress.longname": "MSL Pressure",
    "mslpress.description": "Mean sea level pressure.",
    "sfcwind0.longname": "Surface Wind (2m)",
    "sfcwind0.description": "Speed and direction of the wind at 2m above the ground.",
    "sfcwind.longname": "Surface Wind (10m)",
    "sfcwind.description": "Speed and direction of the wind at 10m above the ground.",
    "blwind.longname": "Boundary Layer Average Wind",
    "blwind.description": "Speed and direction of the vector-averaged wind in the boundary layer. This prediction can be misleading if there is a large change in wind direction through the boundary layer.",
    "bltopwind.longname": "Boundary Layer Top Wind",
    "bltopwind.description": "Speed and direction of the wind at the top of the boundary layer.",
    "blwindshear.longname": "Boundary Layer Wind Shear",
    "blwindshear.description": "Vertical change in wind through the boundary layer, specifically the magnitude of the vector wind difference between the top and bottom. Note that this represents vertical wind shear and does not indicate so-called shear lines (which are horizontal changes of wind speed/direction).",
    "zsfclcldif.longname": "Cumulus Potential",
    "zsfclcldif.description": "Potential for small, non-extensive puffy cloud formation in the boundary layer, i.e. the height difference between the Boundary Layer Height and the surface-based Cumulus Cloudbase.",
    "zsfclcl.longname": "Cumulus Cloudbase",
    "zsfclcl.description": "Cloudbase for small, non-extensive puffy clouds in the boundary layer. More precisely, the surface lifting condensation level is shown, which indicates the level to which humid air must ascend from the ground before it cools enough to reach its dew point temperature.",
    "zsfclclmask.longname": "Cumulus Cloudbase where Potential > 0",
    "zsfclclmask.description": "Combining Cumulus Cloudbase and Cumulus Potential, a mask is calculated and the cumulus cloudbase is only shown where its potential is positive.",
    "zblcldif.longname": "Overdevelopment Potential",
    "zblcldif.description": "Potential for extensive or towering cloud formation at the boundary layer top, i.e. the height difference between Boundary Layer Height and Overdevelopment Cloudbase.",
    "zblcl.longname": "Overdevelopment Cloudbase",
    "zblcl.description": "Cloudbase for extensive or towering boundary layer clouds. Unlike the Cumulus Cloudbase parameter, the boudary layer condensation level is used, which is based upon the average boundary layer humidity.",
    "zblclmask.longname": "Overdevelopment Cloudbase where Potential > 0",
    "zblclmask.description": "Combining Overdevelopment Cloudbase and Overdevelopment Potential, a mask is calculated and the overdevelopment cloudbase is only shown where its potential is positive.",
    "blicw.longname": "Boundary Layer Integrated Cloud Water",
    "blicw.description": "Cumulative water content per unit area in a column reaching from the ground to the boundary layer top.",
    "blcwbase.longname": "Boundary Layer Cloudbase where Integrated Cloud Water > 0",
    "blcwbase.description": "Cloudbase of boundary layer clouds only shown where the integrated boundary layer cloud water is greater than 0.",
    "blcloudpct.longname": "Cloud Cover - Boundary Layer",
    "blcloudpct.description": "Cloud cover due to clouds developing in the boundary layer.",
    "cfracl.longname": "Cloud Cover - Low",
    "cfracl.description": "Cloud cover of low height clouds between 300m AGL and 2000m AGL. Condensating moisture below 300m AGL counts as fog.",
    "cfracm.longname": "Cloud Cover - Mid",
    "cfracm.description": "Cloud cover of mid height clouds between 2000m AGL and 6000m AGL.",
    "cfrach.longname": "Cloud Cover - High",
    "cfrach.description": "Cloud cover of high clouds above 6000m AGL.",
    "clouds.longname": "Cloud Cover - Total",
    "clouds.description": "Composite of low (red), mid (green) and high (blue) clouds.",
    "rain1.longname": "Rain",
    "rain1.description": "Percipitation per hour.",
    "cape.longname": "CAPE",
    "cape.description": "Convective Available Potential Energy (CAPE), indicating atmospheric instability which affects deep convective cloud formation above the boundary layer. A higher value means greater potential instability, larger updraft velocities within deep convective clouds, and greater potential for thunderstorm development.",
    "press1000.longname": "Vertical Velocity at 1000mb",
    "press1000.description": "Wind barbs indicating velocity and direction of wind in 1000mb height as well as collective vertical movement in this layer",
    "press950.longname": "Vertical Velocity at 950mb",
    "press950.description": "Wind barbs indicating velocity and direction of wind in 950mb height as well as collective vertical movement in this layer",
    "press850.longname": "Vertical Velocity at 850mb",
    "press850.description": "Wind barbs indicating velocity and direction of wind in 850mb height as well as collective vertical movement in this layer",
    "press700.longname": "Vertical Velocity at 700mb",
    "press700.description": "Wind barbs indicating velocity and direction of wind in 700mb height as well as collective vertical movement in this layer",
    "press500.longname": "Vertical Velocity at 500mb",
    "press500.description": "Wind barbs indicating velocity and direction of wind in 500mb height as well as collective vertical movement in this layer",
    "pfd_tot.longname": "Potential Flight Distance",
    "pfd_tot.description": "Estimate of a potential flight distance using the polar of a Discus with 100kg ballast."
};
