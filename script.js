
// initialize the map
var map = L.map('map', {
  center: [-10.25, -48.25],
  zoom: 5
});

// add map layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
}).addTo(map);

// load example GEOJSON (from Wikipedia)
var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-47.47909069061279, -7.500046783083409], [-47.50213623046875, -7.440773124769176], [-47.52685546875, -7.433283562993178], [-47.550201416015625, -7.441453987683334], [-47.563934326171875, -7.45030510936652], [-47.58934020996094, -7.440773124769176], [-47.57560729980469, -7.413537742731475], [-47.54127502441406, -7.406047717076258], [-47.47741699218749, -7.361104894772766], [-47.492523193359375, -7.301855128848097], [-47.536468505859375, -7.267799982190557], [-47.561187744140625, -7.267799982190557], [-47.60581970214844, -7.268481110463124], [-47.63671875, -7.31139010567205], [-47.65388488769531, -7.300492972697579], [-47.68547058105469, -7.243959842755391], [-47.72392272949219, -7.228292778591234], [-47.75070190429687, -7.198319490613502], [-47.74314880371094, -7.164937816661006], [-47.70606994628906, -7.138366981206275], [-47.67997741699219, -7.14790540768757], [-47.65045166015625, -7.150630635832775], [-47.62916564941406, -7.1267843388585685], [-47.6202392578125, -7.098848527246507], [-47.59757995605469, -7.067503890354966], [-47.55706787109375, -7.032068262865216], [-47.530975341796875, -6.972094125854329], [-47.530975341796875, -6.948238638117006], [-47.50282287597656, -6.910067341594728], [-47.50419616699219, -6.873256386440719], [-47.51518249511719, -6.853486362532471], [-47.53028869628906, -6.831670212281932], [-47.49458312988281, -6.756669624561524], [-47.495269775390625, -6.714391431550202], [-47.497329711914055, -6.702798381193014], [-47.49183654785156, -6.690523086226222], [-47.497329711914055, -6.674837538218014], [-47.497329711914055, -6.661879532501472], [-47.48771667480469, -6.655059391963732], [-47.47398376464843, -6.626413768432949], [-47.467803955078125, -6.622321400509707], [-47.46162414550781, -6.601859052268644], [-47.46299743652344, -6.592309666807811], [-47.46437072753906, -6.571846078912394], [-47.45613098144531, -6.550017323769185], [-47.45887756347656, -6.543195641804587], [-47.45819091796874, -6.536373866680462], [-47.44789123535156, -6.528187613695323], [-47.43896484375, -6.511132490275876], [-47.41493225097656, -6.488618840362261], [-47.43415832519531, -6.434718445817623], [-47.43072509765624, -6.421071867203481], [-47.40875244140625, -6.369893945725818], [-47.41424560546875, -6.340549632917069], [-47.3785400390625, -6.2709355278022985], [-47.38403320312499, -6.228616522882737], [-47.40394592285156, -6.208820977124995], [-47.43415832519531, -6.116659541800718], [-47.43621826171875, -6.088666616177543], [-47.427978515625, -6.042918942142869], [-47.445831298828125, -6.007410617805351], [-47.445831298828125, -5.9835094792911345], [-47.4224853515625, -5.930240331219308], [-47.43072509765624, -5.89813976783302], [-47.440338134765625, -5.832566896900021], [-47.49595642089844, -5.721212111452892], [-47.46368408203125, -5.664501622284635], [-47.47535705566406, -5.652885532073453], [-47.48291015625, -5.564732344267023], [-47.49664306640625, -5.531927773303296], [-47.55912780761719, -5.464946137112764], [-47.58110046386719, -5.471097825684822], [-47.76580810546875, -5.378132271671647], [-47.805633544921875, -5.389070137535627], [-47.852325439453125, -5.371979635710553], [-47.86949157714844, -5.339848195680365], [-47.87498474121093, -5.276947744869894], [-47.912750244140625, -5.243443809698925], [-48.0047607421875, -5.231819574759611], [-48.05351257324219, -5.2687428663864955], [-48.184661865234375, -5.259170371222248], [-48.223114013671875, -5.235238489827053], [-48.368682861328125, -5.167540507950538], [-48.526611328125, -5.196261752901776], [-48.56712341308594, -5.23113578950404], [-48.58085632324218, -5.295408324430176], [-48.613128662109375, -5.337113527125014], [-48.66256713867187, -5.300194310699868], [-48.70307922363281, -5.313184657813891], [-48.71269226074219, -5.354205005300239], [-48.76333236694336, -5.349077611950107], [-48.766937255859375, -5.36035782055191], [-48.65020751953125, -5.402742192824356], [-48.50189208984375, -5.432819627299598], [-48.393402099609375, -5.398640608599722], [-48.34808349609375, -5.4287182471974935], [-48.34671020507812, -5.46836374968084], [-48.308258056640625, -5.531244325359963], [-48.231353759765625, -5.553114267439087], [-48.135223388671875, -5.643319165077759], [-48.184661865234375, -5.71711274591103], [-48.27392578125, -5.726677886462397], [-48.29864501953125, -5.7690358661221355], [-48.289031982421875, -5.849643907129009], [-48.242340087890625, -5.900188795584172], [-48.2354736328125, -5.952094965666791], [-48.308258056640625, -5.968485371339491], [-48.338470458984375, -6.034042078914927], [-48.305511474609375, -6.042236111676099], [-48.283538818359375, -6.087301070237453], [-48.32611083984375, -6.133727680053854], [-48.407135009765625, -6.15420872459371], [-48.440093994140625, -6.196533712254142], [-48.41949462890625, -6.298918791076363], [-48.37417602539062, -6.33577249349723], [-48.3837890625, -6.376717964353498], [-48.442840576171875, -6.345326728078956], [-48.51837158203124, -6.35897532723566], [-48.60626220703125, -6.43813003322516], [-48.6749267578125, -6.550017323769185], [-48.66119384765625, -6.659151487659317], [-49.02099609375, -6.784625755799487], [-49.207763671875, -6.923700302184781], [-49.18510437011718, -7.251452594070744], [-49.37650144100189, -7.49999359783898], [-47.47909069061279, -7.500046783083409]]
        ]
      },
      "properties": {
        "prop0": "1",
        "prop1": { "lat": '-5.0', "lon": 'LONG_310' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-50.00002384185791, -9.25033580912615], [-50.00375747680663, -9.256138704287174], [-50.017147064208984, -9.265457021644014], [-50.02281188964844, -9.272572661159229], [-50.02967834472656, -9.275452759952284], [-50.04100799560547, -9.291546994235377], [-50.04804611206055, -9.314585873635288], [-50.05577087402344, -9.330170136613821], [-50.060062408447266, -9.348463817510343], [-50.05971908569336, -9.362352822055593], [-50.056800842285156, -9.37149893660212], [-50.05903244018555, -9.387080650767016], [-50.07036209106445, -9.394701886346853], [-50.075340270996094, -9.404693918862904], [-50.07465362548828, -9.41383891600617], [-50.09113311767578, -9.432128184075292], [-50.090789794921875, -9.449400491246903], [-50.096282958984375, -9.47818574341497], [-50.10246276855469, -9.56825101900839], [-50.158424377441406, -9.690105836991949], [-50.18726348876953, -9.746279578078965], [-50.212669372558594, -9.85521608608867], [-50.25901794433594, -9.888363553502414], [-50.28923034667969, -10.000000199003543], [-50.00000238418579, -10.000000199003543], [-50.00002384185791, -9.25033580912615]]
        ]
      },
      "properties": {
        "prop0": "2",
        "prop1": { "lat": '-7.5', "lon": 'LONG_307,5' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-47.500001192092896, -7.500000245994879], [-49.37651753425598, -7.49999359783898], [-49.378910064697266, -7.542380172130714], [-49.37255859375, -7.618442212274373], [-49.15283203125, -7.8035208613796225], [-49.19677734374999, -8.102738577783168], [-49.273681640625, -8.385431015567708], [-49.581298828125, -8.841651120809145], [-49.76806640625, -8.890498870150504], [-49.91569519042969, -9.188531167313887], [-49.992642402648926, -9.234366764256157], [-50.00002384185791, -9.250293451875205], [-49.99999970197677, -10.000000199003543], [-47.50007629394531, -9.999957935637088], [-47.500001192092896, -7.500000245994879]]
        ]
      },
      "properties": {
        "prop0": "3",
        "prop1": { "lat": '-7.5', "lon": 'LONG_310' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-47.499990463256836, -7.500004234888372], [-47.500006556510925, -10.000000199003543], [-46.46936438977718, -9.999999868821014], [-46.461181640625, -9.914743843241718], [-46.505126953125, -9.811916418615466], [-46.571044921875, -9.811916418615466], [-46.5765380859375, -9.779437952385054], [-46.59301757812499, -9.74154239811809], [-46.63558959960937, -9.744249366331491], [-46.649322509765625, -9.691459531916042], [-46.610870361328125, -9.667092188303721], [-46.536712646484375, -9.561480020594095], [-46.56829833984375, -9.481572085088517], [-46.636962890625, -9.417903281516393], [-46.671295166015625, -9.386741925294897], [-46.759185791015625, -9.41383891600617], [-46.750946044921875, -9.379967346350394], [-46.82647705078124, -9.199715262283302], [-46.926727294921875, -9.06683904050055], [-47.06268310546875, -9.06683904050055], [-46.96929931640625, -8.90678000752024], [-46.9061279296875, -8.843008090380774], [-46.90475463867187, -8.767010116265327], [-46.926727294921875, -8.72493311456926], [-46.878662109375, -8.680136256526186], [-46.91162109375, -8.62582986761339], [-46.841583251953125, -8.529416824512362], [-46.77978515624999, -8.369127356573127], [-46.72897338867187, -8.381355164877718], [-46.636962890625, -8.324288778882053], [-46.53808593749999, -8.321571124023244], [-46.505126953125, -8.265855052877221], [-46.48727416992187, -8.196538715606483], [-46.51336669921875, -8.181586545769138], [-46.48040771484375, -8.090502159756328], [-46.465301513671875, -8.078265370235334], [-46.476287841796875, -8.015715997869059], [-46.501007080078125, -7.9708376933028715], [-46.547698974609375, -7.949076741710949], [-46.558685302734375, -7.920513741772839], [-46.60125732421875, -7.896029593273104], [-46.874542236328125, -7.957237233971136], [-46.95281982421875, -8.004836862364057], [-47.00225830078124, -8.060589352854752], [-47.04895019531249, -8.04699189079008], [-47.0654296875, -8.000757111634481], [-47.237091064453125, -7.8089631205593895], [-47.270050048828125, -7.736847451615257], [-47.308502197265625, -7.734125863414585], [-47.30712890625, -7.705548128425908], [-47.30438232421875, -7.693299936880303], [-47.3345947265625, -7.674246491629], [-47.311248779296875, -7.65927532842025], [-47.368927001953125, -7.612997502224091], [-47.37373352050781, -7.624567428357386], [-47.36412048339844, -7.637498152147215], [-47.35176086425781, -7.643623095297467], [-47.36480712890624, -7.6551921925603], [-47.38059997558594, -7.657233765380416], [-47.38815307617187, -7.635456484915743], [-47.38197326660156, -7.6014272638068], [-47.40669250488281, -7.5891760832659525], [-47.396392822265625, -7.567395345288425], [-47.43965148925781, -7.557865926333568], [-47.421112060546875, -7.535402892921441], [-47.46437072753906, -7.520426889868663], [-47.470550537109375, -7.534722176735355], [-47.499990463256836, -7.500004234888372]]
        ]
      },
      "properties": {
        "prop0": "4",
        "prop1": { "lat": '-7.5', "lon": 'LONG_312,5' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-50.00000238418579, -10.000000199003543], [-50.289231687784195, -10.000000199003543], [-50.3997802734375, -10.14598715873234], [-50.392913818359375, -10.229788729398908], [-50.44921875, -10.394623861979046], [-50.50689697265625, -10.512117197001185], [-50.60302734375, -10.674103537369726], [-50.57281494140624, -10.784744659837425], [-50.6414794921875, -11.081384602413047], [-50.77056884765625, -11.504248316773985], [-50.6524658203125, -11.614574146281976], [-50.64971923828125, -11.652236404115387], [-50.7843017578125, -11.835094475418835], [-50.67718505859375, -11.97215792649269], [-50.660966075956814, -12.499999995224702], [-49.99999970197677, -12.499999667895956], [-50.00000238418579, -10.000000199003543]]
        ]
      },
      "properties": {
        "prop0": "5",
        "prop1": { "lat": '-10.0', "lon": 'LONG_307,5' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-50.0, -10.0], [-47.5, -10.0], [-47.5, -12.5], [-50.0, -12.5], [-50.0, -10.0]]
        ]
      },
      "properties": {
        "prop0": "6",
        "prop1": { "lat": '-10.0', "lon": 'LONG_310' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-47.49999850988387, -10.000000199003543], [-47.499990463256836, -12.500017998305], [-46.15787208080291, -12.500002286525898], [-46.15425109863281, -12.48283921636538], [-46.16111755371094, -12.47211237413556], [-46.22634887695312, -12.496247143930919], [-46.25587463378906, -12.49222483864044], [-46.2469482421875, -12.444622814174567], [-46.27166748046875, -12.41511858500638], [-46.29913330078125, -12.41780092599297], [-46.28814697265625, -12.382928338487396], [-46.35131835937499, -12.342684947036528], [-46.318359375, -12.30511886679749], [-46.37603759765625, -12.294384713402058], [-46.3677978515625, -12.267547413218194], [-46.35955810546875, -12.232654837013472], [-46.38427734375, -12.192388447608373], [-46.3677978515625, -12.098409789924855], [-46.395263671875, -12.042006714207925], [-46.329345703125, -11.958723393646638], [-46.24969482421874, -11.947975286928031], [-46.19476318359375, -11.931852326960579], [-46.16832733154297, -11.899939476577504], [-46.1758804321289, -11.884485591774448], [-46.200599670410156, -11.883813663831798], [-46.2139892578125, -11.898259749017761], [-46.24042510986328, -11.900947308132368], [-46.28437042236328, -11.883141734230884], [-46.31629943847656, -11.895908113002934], [-46.364707946777344, -11.878774151411475], [-46.3677978515625, -11.843494955867735], [-46.34719848632812, -11.841478864107899], [-46.2908935546875, -11.646856393732364], [-46.087646484375, -11.641476279218743], [-46.0986328125, -11.60381256578339], [-46.47216796874999, -11.512322409887743], [-46.58203125, -11.30770770776545], [-46.4501953125, -11.199956869621811], [-46.2744140625, -10.930404972955532], [-46.1700439453125, -10.655209552534215], [-45.8624267578125, -10.514817669538678], [-45.81298828124999, -10.385168447070171], [-45.6866455078125, -10.260870794748941], [-45.69213867187499, -10.15680150114606], [-45.72784423828125, -10.142607601797684], [-45.78758239746094, -10.263573438929933], [-45.992202758789055, -10.246005839389973], [-46.021728515625, -10.166263750813542], [-46.09588623046875, -10.206813072484595], [-46.21124267578125, -10.163560279490476], [-46.34033203125, -10.158153268244805], [-46.469357013702385, -10.000000199003543], [-47.49999850988387, -10.000000199003543]]
        ]
      },
      "properties": {
        "prop0": "7",
        "prop1": { "lat": '-10.0', "lon": 'LONG_312,5' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-50.000152587890625, -12.499934202138796], [-50.66100597381592, -12.499997049266003], [-50.66001892089844, -12.525071832687342], [-50.71289062499999, -12.601475166388832], [-50.653839111328125, -12.65105813370347], [-50.620880126953125, -12.81314041417555], [-50.504150390625, -12.857326637394749], [-50.4766845703125, -12.711348761576271], [-50.43273925781249, -12.647038251367563], [-50.31517267227172, -12.499997049266003], [-50.21859169006348, -12.500017998305], [-50.230865478515625, -12.529093626349596], [-50.18692016601562, -12.559925292183351], [-50.2459716796875, -12.58807271601913], [-50.240478515625, -12.614876915941618], [-50.255584716796875, -12.6242577232695], [-50.266571044921875, -12.679195536451866], [-50.29815673828125, -12.673836270619802], [-50.285797119140625, -12.710009125046277], [-50.310516357421875, -12.802427434186281], [-50.29266357421875, -12.837242952998404], [-50.23223876953125, -12.860004340637042], [-50.225372314453125, -12.87473119764905], [-50.18829345703125, -12.900166457880356], [-50.167694091796875, -12.892134549572589], [-50.08014678955078, -12.905855570253744], [-50.04100799560547, -12.93597224268441], [-50.00000238418579, -12.935193228702234], [-50.000152587890625, -12.499934202138796]]
        ]
      },
      "properties": {
        "prop0": "8",
        "prop1": { "lat": '-12.5', "lon": 'LONG_307,5' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-50.0000000372529, -12.499999995224702], [-50.0000000372529, -12.9351961696153], [-49.98950958251953, -12.945341132980488], [-49.979896545410156, -12.940322128384613], [-49.951744079589844, -12.960062963329314], [-49.36981201171875, -13.277372689908304], [-49.339599609375, -13.250639570043104], [-49.34509277343749, -13.106230102044563], [-49.229736328125, -12.884102383544768], [-49.1253662109375, -12.79305320327989], [-49.07318115234375, -12.86268201531027], [-49.08966064453125, -12.905520920167197], [-49.02923583984374, -12.908198108318507], [-48.97705078125, -12.95638258731319], [-48.87542724609375, -12.806444855044726], [-48.84521484375, -12.811801316582619], [-48.73260498046874, -12.924260634987855], [-48.73260498046874, -12.993852961834971], [-48.66668701171874, -12.996529200993775], [-48.63922119140624, -13.017938075150177], [-48.58154296875, -13.1276294685656], [-48.59527587890625, -13.314794112238198], [-48.5595703125, -13.304102866767076], [-48.515625, -13.135653750651828], [-48.482666015625, -13.138328453077788], [-48.4552001953125, -13.2907381465569], [-48.153076171875, -13.149026971287407], [-48.1640625, -13.31212134511713], [-48.08441162109375, -13.288065114120283], [-48.076171875, -13.24261906101892], [-48.02398681640625, -13.282718960896405], [-47.9937744140625, -13.277372689908304], [-47.96630859375, -13.309448548494611], [-47.8179931640625, -13.320139557953958], [-47.6861572265625, -13.464421817388473], [-47.61749267578125, -13.365571074958245], [-47.66693115234375, -13.170422607388247], [-47.63671875, -13.114255082724755], [-47.56805419921875, -13.12227980155627], [-47.56256103515625, -13.183793930804562], [-47.500001192092896, -13.188499836002514], [-47.50007629394531, -12.499934202138796], [-50.0000000372529, -12.499999995224702]]
        ]
      },
      "properties": {
        "prop0": "9",
        "prop1": { "lat": '-12.5', "lon": 'LONG_310' }
      }
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [[-47.50007629394531, -12.500269386640573], [-47.500001192092896, -13.188494613072468], [-47.48497009277344, -13.185131022955911], [-47.48634338378906, -13.22056129922611], [-47.4224853515625, -13.29608412305202], [-47.37030029296875, -13.24261906101892], [-47.2796630859375, -13.264006497508065], [-47.230224609375, -13.19716452328198], [-47.17803955078125, -13.194490463294645], [-47.164306640625, -13.215882123462867], [-46.856689453125, -13.06342578889815], [-46.81549072265625, -12.999205411301194], [-46.746826171875, -12.96708898463745], [-46.45294189453125, -12.972442010578366], [-46.41723632812499, -12.833226023521231], [-46.3623046875, -12.980471333463804], [-46.110992431640625, -12.921583618932376], [-46.30462646484375, -12.945675729694083], [-46.26068115234375, -12.546520673709788], [-46.1590576171875, -12.527753035431779], [-46.15184783935547, -12.513341243020308], [-46.15658462047577, -12.501070685328232], [-46.15787744522095, -12.500002286525898], [-47.50007629394531, -12.500269386640573]]
        ]
      },
      "properties": {
        "prop0": "10",
        "prop1": { "lat": '-12.5', "lon": 'LONG_312,5' }
      }
    }
  ]
};


function onLayerClick(num) {
  lat = num.target.feature.properties.prop1.lat;
  lon = num.target.feature.properties.prop1.lon;
  data = (dados[parseInt((document.getElementById("dia_juliano").value) - 1)][lat][lon]);
  appendData(data);
}

function appendData(data) {
  var table = document.getElementById('DataTable').getElementsByTagName('tbody')[0];
  deleteTable(table);
  if (!Array.isArray(data)) {
    table.insertRow().innerHTML =
      "<th scope='row'>" + ((document.getElementById("dia_juliano").value)).toString() + "</th>" +
      "<td>" + data.TempMédia.toFixed(2) + "</td>" +
      "<td>" + data.TempMax.toFixed(2) + "</td>" +
      "<td>" + data.TempMin.toFixed(2) + "</td>" +
      "<td>" + data.Radiação.toFixed(2) + "</td>" +
      "<td>" + data.Umidade.toFixed(2) + "</td>" +
      "<td>" + data.ET0HS.toFixed(2) + "</td>";
  } else {
    for (let index = 0; index < data.length; index++) {
      table.insertRow().innerHTML =
        "<th scope='row'>" + (index).toString() + "</th>" +
        "<td>" + data[index].TempMédia.toFixed(2) + "</td>" +
        "<td>" + data[index].TempMax.toFixed(2) + "</td>" +
        "<td>" + data[index].TempMin.toFixed(2) + "</td>" +
        "<td>" + data[index].Radiação.toFixed(2) + "</td>" +
        "<td>" + data[index].Umidade.toFixed(2) + "</td>" +
        "<td>" + data[index].ET0HS.toFixed(2) + "</td>";
    }
  }
}

function deleteTable(table) {
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
}

// load GEOJSON object/array to map
L.geoJSON(geojsonFeature, {
  // style features based on properties
  style: function (feature) {
    switch (feature.properties.prop0) {
      case '1': return { color: "blue" }
      case '2': return { color: "blue" }
      case '3': return { color: "blue" }
      case '4': return { color: "blue" }
      case '5': return { color: "blue" }
      case '6': return { color: "blue" }
      case '7': return { color: "blue" }
      case '8': return { color: "blue" }
      case '9': return { color: "blue" }
      case '9': return { color: "blue" }
      case '10': return { color: "blue" }
    }
  }, // bind tooltip to each feature
  onEachFeature: function (feature, layer, dados) {
    lat = feature.properties.prop1.lat;
    lon = feature.properties.prop1.lon;
    // check if specific property is existing
    if (feature.properties.prop0) {
      layer.bindTooltip("Quadrante: " + lat + " | " + lon);
      layer.addEventListener('click', onLayerClick, feature.properties.prop0);
    }
  }
}).addTo(map);
