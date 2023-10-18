var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cities_1 = new ol.format.GeoJSON();
var features_Cities_1 = format_Cities_1.readFeatures(json_Cities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_1.addFeatures(features_Cities_1);
var lyr_Cities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cities_1, 
                style: style_Cities_1,
                interactive: true,
    title: 'Cities копия<br />\
    <img src="styles/legend/Cities_1_0.png" /> Порт<br />\
    <img src="styles/legend/Cities_1_1.png" /> Сфера услуг<br />\
    <img src="styles/legend/Cities_1_2.png" /> Туризм<br />'
        });
var format_Cities_2 = new ol.format.GeoJSON();
var features_Cities_2 = format_Cities_2.readFeatures(json_Cities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_2.addFeatures(features_Cities_2);
var lyr_Cities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cities_2, 
                style: style_Cities_2,
                interactive: true,
    title: 'Cities<br />\
    <img src="styles/legend/Cities_2_0.png" /> 14325 - 20412<br />\
    <img src="styles/legend/Cities_2_1.png" /> 20412 - 43437<br />\
    <img src="styles/legend/Cities_2_2.png" /> 43437 - 83400<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Cities_1.setVisible(true);lyr_Cities_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Cities_1,lyr_Cities_2];
lyr_Cities_1.set('fieldAliases', {'id': 'id', 'Type': 'Отрасль экономики', 'Population': 'Население', 'Migration': 'Миграция', 'Name': 'Название', });
lyr_Cities_2.set('fieldAliases', {'id': 'id', 'Type': 'Отрасль экономики', 'Population': 'Население', 'Migration': 'Миграция', 'Name': 'Название', });
lyr_Cities_1.set('fieldImages', {'id': 'Hidden', 'Type': 'TextEdit', 'Population': 'TextEdit', 'Migration': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cities_2.set('fieldImages', {'id': 'Hidden', 'Type': 'TextEdit', 'Population': 'TextEdit', 'Migration': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cities_1.set('fieldLabels', {'Type': 'no label', 'Population': 'no label', 'Migration': 'no label', 'Name': 'inline label', });
lyr_Cities_2.set('fieldLabels', {'Type': 'no label', 'Population': 'no label', 'Migration': 'no label', 'Name': 'header label', });
lyr_Cities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});