<?php
/**
 * The main template file for BN Telecom Theme
 */

// Lógica simple de idioma para la demo (en un entorno real se usaría Polylang o WPML)
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'es';
$dir = ($lang === 'ar') ? 'rtl' : 'ltr';

$translations = [
    'es' => [
        'title' => 'Proveedores mayoristas',
        'subtitle' => 'Distribución rápida, precios competitivos y stock real de las mejores marcas.',
        'cta' => 'Solicitar Lista de Precios',
        'shipping' => 'Envío Global Exprés',
        'warranty' => 'Garantía Certificada',
        'pricing' => 'Precios Dinámicos',
        'access' => 'Acceso Mayoristas'
    ],
    'en' => [
        'title' => 'Wholesale Suppliers',
        'subtitle' => 'Fast distribution, competitive prices, and real stock of top brands.',
        'cta' => 'Request Price List',
        'shipping' => 'Global Express Shipping',
        'warranty' => 'Certified Warranty',
        'pricing' => 'Dynamic Pricing',
        'access' => 'Wholesale Access'
    ],
    'fr' => [
        'title' => 'Fournisseurs Grossistes',
        'subtitle' => 'Distribution rapide, prix compétitifs et stock réel des meilleures marques.',
        'cta' => 'Demander la Liste de Prix',
        'shipping' => 'Livraison Express Mondiale',
        'warranty' => 'Garantie Certifiée',
        'pricing' => 'Prix Dynamiques',
        'access' => 'Accès Grossistes'
    ],
    'ar' => [
        'title' => 'موردي الجملة',
        'subtitle' => 'توزيع سريع، أسعار تنافسية، ومخزون حقيقي من أفضل العلامات التجارية.',
        'cta' => 'طلب قائمة الأسعار',
        'shipping' => 'شحن عالمي سريع',
        'warranty' => 'ضمان معتمد',
        'pricing' => 'أسعار ديناميكية',
        'access' => 'دخول تجار الجملة'
    ]
];

$t = $translations[$lang];
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="<?php echo $dir; ?>">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Outfit', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    
    <style>
        .glass {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.5);
        }
        .dark .glass {
            background: rgba(15, 23, 42, 0.8);
            border-bottom: 1px solid rgba(30, 41, 59, 0.5);
        }
    </style>

    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300'); ?>>

    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 glass">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center">
                    <span class="text-2xl font-display font-bold tracking-tighter text-blue-600 dark:text-blue-400">
                        BN TELECOM
                    </span>
                </div>
                
                <nav class="hidden md:flex space-x-8 items-center">
                    <a href="?lang=<?php echo $lang; ?>" class="text-sm font-medium hover:text-blue-600">Inicio</a>
                    <a href="#" class="text-sm font-medium hover:text-blue-600">Dispositivos</a>
                    <a href="#" class="text-sm font-medium hover:text-blue-600">Servicios</a>
                    <a href="#" class="text-sm font-medium hover:text-blue-600">Contacto</a>
                </nav>

                <div class="flex items-center space-x-4 rtl:space-x-reverse">
                    <!-- Language Selector -->
                    <div class="flex space-x-2 rtl:space-x-reverse text-xs font-bold uppercase">
                        <a href="?lang=es" class="<?php echo $lang === 'es' ? 'text-blue-600' : ''; ?>">ES</a>
                        <a href="?lang=en" class="<?php echo $lang === 'en' ? 'text-blue-600' : ''; ?>">EN</a>
                        <a href="?lang=fr" class="<?php echo $lang === 'fr' ? 'text-blue-600' : ''; ?>">FR</a>
                        <a href="?lang=ar" class="<?php echo $lang === 'ar' ? 'text-blue-600' : ''; ?>">AR</a>
                    </div>
                    <button class="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        <?php echo $t['access']; ?>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero -->
        <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
                    <?php echo $t['title']; ?>
                </h1>
                <p class="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                    <?php echo $t['subtitle']; ?>
                </p>
                <div class="flex justify-center space-x-4 rtl:space-x-reverse">
                    <button class="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-xl">
                        <?php echo $t['cta']; ?>
                    </button>
                </div>
            </div>
        </section>

        <!-- Features -->
        <section class="py-24 bg-slate-50 dark:bg-slate-900/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                        <h3 class="text-xl font-bold mb-4"><?php echo $t['shipping']; ?></h3>
                        <p class="text-slate-600 dark:text-slate-400">Logística optimizada a Europa y exteriores.</p>
                    </div>
                    <div class="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                        <h3 class="text-xl font-bold mb-4"><?php echo $t['warranty']; ?></h3>
                        <p class="text-slate-600 dark:text-slate-400">Todos los terminales con medio año de garantía.</p>
                    </div>
                    <div class="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm">
                        <h3 class="text-xl font-bold mb-4"><?php echo $t['pricing']; ?></h3>
                        <p class="text-slate-600 dark:text-slate-400">Tarifas ajustadas al mercado diariamente.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="py-12 border-t border-slate-100 dark:border-slate-900 text-center text-slate-500 text-sm">
        <p>© <?php echo date('Y'); ?> BN Telecom. All rights reserved.</p>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
