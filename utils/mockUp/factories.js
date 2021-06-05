const random = require('random');

const companyNameSet = [
    'La amistad',
    'Car Mar',
    'Autoservicio Leon',
    'San Miguel Almacen',
    'Hipermercado Libertad SA',
    'Despensa Tere',
    'El Economico',
    'Kiosko "La Esquina"',
    'Tutti Frutti',
    'Super España',
    'Telecentro Pelozo',
    'Don Ismael',
    'La Gran Familia',
    'Polirubro 500 viviendas',
    'Avicola Cari',
    'Carniceria Los Hermanos',
    'Mayorista Cecilia',
    'El Farolito',
]

const productsNameSet = [
    'Hamburguesas',
    'aceite de girasol',
    'aceite de maíz',
    'aceite mezcla',
    'arroz blanco',
    'azúcar',
    'edulcorante',
    'mayonesa', 
    'mostaza', 
    'sal', 
    'vinagre',
    'atún',
    'tomates salsa',
    'vegetales', 
    'dulce light', 
    'mermelada', 
    'harina de maíz', 
    'harina de trigo',
    'huevos', 
    'café instantáneo',
    'café',
    'molido',
    'mate cocido',
    'té',
    'yerba',
    'leche descremada',
    'leche entera',
    'pan de molde',
    'pan francés',
    'pan rallado', 
    'fideos guiseros',
    'fideos largos', 
    'fideos soperos',
    'Yogurt descremado bebible', 
    'yogurt descremado con cereales y frutas', 
    'yogurt descremado firme y batido', 
    'lavandina', 
    'lavavajillas', 
    'limpiador de piso', 
    'papel higiénico', 
    'rollo de cocina', 
    'jabón en pan', 
    'jabón en polvo', 
    'jabón líquido', 
    'suavizante para la ropa', 
    'tapa de empanadas', 
    'tapa de tartas',
    'crema enguaje',
    'champu',
    'desodorante femenino',
    'desodorante masculino', 
    'alcohol fino', 
    'crema dental', 
    'protectores diarios femenino', 
    'tampones', 
    'toallas higiénicas',

]

const cuitsFactory = () => {
    let cuitSet = [];
    const minC = 30000000000;
    const maxC = 39999999999;
    for (i=0;i<companyNameSet.length;i++) {
        let cuit = random.int(minC,maxC);
        while (cuit in cuitSet) {
            cuit = random.int(minC,maxC);
        }
        cuitSet.push(cuit);
    }
    return cuitSet;
}

const cuitsSet = cuitsFactory();

const codigosEanFactory = ()=>{
    let codigosSet = [];
    const minC = 1000000000000;
    const maxC = 9999999999999;
    for (i=0;i<productsNameSet.length;i++) {
        let codigo = random.int(minC,maxC);
        while (codigo in codigosSet) {
            codigo = random.int(minC,maxC);
        }
        codigosSet.push(codigo);
    }
    return codigosSet;
}

const codigosEanSet = codigosEanFactory();

const unitsSet = ['kg', 'lt'];

const productsFactory = () => {
    const total = random.int(8,30);
    let prodSetName = [];
    let products = [];
    let product = new Object;
    const minI = 0;
    const maxI = productsNameSet.length-1;
    for (i=0;i<total;i++) {
        let index = random.int(minI,maxI);
        let prodName = productsNameSet[index];
        while (prodName in prodSetName){
            index = random.int(minI,maxI);
            prodName = productsNameSet[index];
        }
        prodSetName.push(prodName);
        product = {
            denominacion: prodName,
            codigo_ean: codigosEanSet[index],
            precio_unidad: random.int(40,215),
            unidad_medida: unitsSet[random.int(0,1)],
            cantidad_prod: random.int(150,600),
            cantidad_vend: random.int(150,600),
        };
        products.push(product);
    };
    return products;
}

const years = ['2020', '2021'];
const months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
const days = ['01','02','03','04','05','06','07','08','09','10','11','01','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'];

const dateFactory = () => {
    
    const year = years[0];
    const month = months[random.int(0,5)];
    const day = days[random.int(0,28)];

    const date = year+'-'+month+'-'+day;

    return date;
}


const reportsFactory = () => {
    let reports = [];
    let report = new Object;
    let id_rep = 0;

    for (index_company in companyNameSet) {
        
        const total = random.int(1,6);
        let dates = []
        
        for (i=0;i<=total;i++) {
            id_rep = id_rep+1;
            let date = dateFactory();
            while (date in dates) {
                date = dateFactory();
            };
            dates.push(date);
            report = {
                periodo: {
                    year: years[0],
                    month: months[random.int(0,5)]
                },
                listaRegistro: productsFactory(),
                date_upload: date,
                day_limit: 10,
                id: id_rep,
                infoEmpresa: {
                    cuit: cuitsSet[index_company],
                    razon_social: companyNameSet[index_company],
                },
            };
            reports.push(report);
        }      
    }
    return reports;
}

//const reportsData = reportsFactory();



module.exports = {
    reportsFactory
};

