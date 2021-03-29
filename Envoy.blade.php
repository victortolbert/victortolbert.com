@setup
$repo = 'git@github.com:victortolbert/victortolbert.com.git';
$branch = $branch ?? 'main';
$remote = $remote ?? 'gentle-breeze';
$site = 'victortolbert.com';
$release_dir = '/home/forge/releases/' . $site;
$app_dir = '/home/forge/' . $site;
$release = 'release_' . date('Y-md-Hi-s');
function logMessage($message) {
    return "echo '\033[32m" .$message. "\033[0m';\n";
}
@endsetup

@servers(['localhost' => '127.0.0.1', 'remote' => $remote])

@macro('deploy', ['on' => 'remote'])
fetch_repo
run_composer
run_yarn
generate_assets
update_permissions
update_symlinks
@endmacro

@task('fetch_repo')
{{ logMessage("[1/6] 🚀  Fetching the ".$repo." repository…") }}
[ -d {{ $release_dir }} ] || mkdir -p {{ $release_dir }}
cd {{ $release_dir }}
git clone --branch {{ $branch }} {{ $repo }} {{ $release }}
@endtask

@task('run_composer')
{{ logMessage("[2/6] 🚚  Running Composer…") }}
cd {{ $release_dir }}/{{ $release }}
composer install --prefer-dist --no-scripts;
php artisan clear-compiled --env=production;
@endtask

@task('run_yarn', ['on' => 'remote'])
{{ logMessage("[3/6] 📦  Running Yarn…") }}
cd {{ $release_dir }}/{{ $release }}
yarn config set ignore-engines true
yarn
@endtask

@task('generate_assets', ['on' => 'remote'])
{{ logMessage("[4/6] 🌅  Generating assets…") }}
cd {{ $release_dir }}/{{ $release }}
@endtask

@task('update_permissions')
{{ logMessage("[5/6] 🔑  Updating permissions…") }}
cd {{ $release_dir }}
chgrp -R www-data {{ $release }}
chmod -R ug+rxw {{ $release }}
@endtask

@task('update_symlinks')
{{ logMessage("[6/6] 🔗  Updating symlinks…") }}
ln -nfs {{ $release_dir }}/{{ $release }} {{ $app_dir }}
chgrp -h www-data {{ $app_dir }}

cd {{ $release_dir }}/{{ $release }};
ln -nfs ../../.env .env;
chgrp -h www-data .env;

rm -r {{ $release_dir }}/{{ $release }}/storage/logs;
cd {{ $release_dir }}/{{ $release }}/storage;
ln -nfs ../../logs logs;
chgrp -h www-data logs;

sudo -S service php8.0-fpm reload;

cd {{ $release_dir }}/{{ $release }}

php artisan config:cache
{{-- php artisan route:cache --}}
{{-- php artisan horizon:purge --}}
{{-- php artisan horizon:terminate --}}
php artisan queue:restart

{{ logMessage("php artisan up") }}
{{ logMessage("✨ 🗃 ⚙️ ") }}

@endtask
