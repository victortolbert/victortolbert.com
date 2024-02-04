<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="env" content="{{ App::environment() }}">
    <meta name="token" content="{{ Session::token() }}">
    <title>{{$page_title or 'Sandbox'}}</title>
    <link href="http://fonts.googleapis.com/css?family=Roboto:400,300,500,700" rel="stylesheet">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="//cdn.datatables.net/plug-ins/a5734b29083/integration/bootstrap/3/dataTables.bootstrap.css"/>
    <style>
    html {
      min-height: 100%;
      overflow-y: scroll;
    }
    body {
        padding-top: 70px;
        padding: 70px;
        font-family: Roboto;
    }
    table {
        /*font-size: 11px;*/
    }
    td.currency {
      text-align: right;
    }
    td.currency::before {
      display: block;
      float: left;
      padding-right: 2px;
      content: "$ ";
    }
    td.rate,
    td.rate::before {
      font-weight: bold;
    }
    td.cpp,
    td.cpp::before {
      font-style: italic;
    }
    a, a:link, a:visited, a:hover, a:active, .btn-link {
        color: #4197b5;
    }
    /*table thead th {*/
        /*color: #fff;*/
        /*background-color: #51545d;*/
        /*border-color: #51545d;*/
    /*}*/
    .panel-default>.panel-heading {
        color: #fff;
        background-color: #51545d;
        border-color: #51545d;
    }
    .panel {
      min-height: 122px;
    }
    .btn,
    .panel-title {
        text-transform: uppercase;
    }
    .panel-title {
        font-weight: 300;
    }
    .table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
        vertical-align: middle;
    }
    table.dataTable thead th {color: white; font-weight: 300 }
    table.dataTable thead .sorting { background-color:  #51545d}
    table.dataTable thead .sorting_asc { background-color: #51545d }
    table.dataTable thead .sorting_desc { background-color: #51545d }
    table.dataTable thead .sorting_asc_disabled { background-color:  #51545d }
    table.dataTable thead .sorting_desc_disabled { background-color: #51545d }

    table.dataTable thead .sorting { background: #51545d url('/img/sort_both.png') no-repeat center right; }
    table.dataTable thead .sorting_asc { background: #51545d url('/img/sort_asc.png') no-repeat center right; }
    table.dataTable thead .sorting_desc { background: #51545d url('/img/sort_desc.png') no-repeat center right; }

    table.dataTable thead .sorting_asc_disabled { background: #51545d url('/img/sort_asc_disabled.png') no-repeat center right; }
    table.dataTable thead .sorting_desc_disabled { background: #51545d url('/img/sort_desc_disabled.png') no-repeat center right; }

    .navbar-inverse {
        background-color: #62afba;
        border-color: #62afba;
    }
    .navbar-inverse .navbar-brand {
        color: #eee;
    }
    .btn-primary {
        color: #fff;
        background-color: #682567;
        border-color: #551e54;
    }
    .btn-primary:hover, .btn-primary:focus, .btn-primary.focus, .btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {
        color: #fff;
        background-color: #421842;
        border-color: #280e28;
    }
    .btn-secondary {
        color: #fff;
        background-color: #f58220;
        border-color: #f1750b;
    }
    .btn-secondary:hover, .btn-secondary:focus, .btn-secondary.focus, .btn-secondary:active, .btn-secondary.active, .open > .btn-secondary.dropdown-toggle {
        color: #fff;
        background-color: #d8690a;
        border-color: #b65808;
    }

    .print-header {
        display: none;
    }
    @media print {
        .print-header {
            display: block;
        }
        * { background: transparent !important; color: black !important; text-shadow: none !important; filter:none !important; -ms-filter: none !important; } /* Black prints faster: h5bp.com/s */
        a, a:visited { text-decoration: underline; }
        a[href]:after { content: " (" attr(href) ")"; }
        abbr[title]:after { content: " (" attr(title) ")"; }
        .ir a:after, a[href^="javascript:"]:after, a[href^="#"]:after { content: ""; }  /* Don't show links for images, or javascript/internal links */
        pre, blockquote { border: 1px solid #999; page-break-inside: avoid; }
        thead { display: table-header-group; } /* h5bp.com/t */
        tr, img { page-break-inside: avoid; }
        img { max-width: 100% !important; }
        @page { margin: 0.5cm; }
        p, h2, h3 { orphans: 3; widows: 3; }
        h2, h3 { page-break-after: avoid; }
        body {
            font-size: 6pt;
            /*font-family: Georgia, "Times New Roman", Times, serif;*/
        }
        label, .panel {
            display: none;
        }
        table.table-bordered.dataTable {
            border-collapse: collapse !important;
        }
        .table>thead>tr>th,
        .table>tbody>tr>th,
        .table>tfoot>tr>th,
        .table>thead>tr>td,
        .table>tbody>tr>td,
        .table>tfoot>tr>td {
            padding: 6px;
        }
        .table-bordered>thead>tr>th, .table-bordered>tbody>tr>th, .table-bordered>tfoot>tr>th, .table-bordered>thead>tr>td, .table-bordered>tbody>tr>td, .table-bordered>tfoot>tr>td {
            border: 1px solid #ddd;
            border: thin solid black;
            border: none;
        }
    }
    </style>
    <!-- App -->
    <script>
        window.App = window.App || {};
        App.siteURL = '{{ URL::to("/") }}';
        App.currentURL = '{{ URL::current() }}';
        App.fullURL = '{{ URL::full() }}';
        App.apiURL = '{{ URL::to("api") }}';
        App.assetURL = '{{ URL::to("assets") }}';
    </script>

    @yield('head')

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
@include('proposal-viewer.layouts.nav')
<!-- Begin page content -->
<div class="container-fluid">
  @if (Session::get('flash_message'))
  <div class="alert alert-danger alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
    {{ Session::get('flash_message') }}
  </div>
  @endif
    @yield('content')

</div>

<script type="text/javascript" charset="utf8" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.3/js/jquery.dataTables.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/plug-ins/a5734b29083/integration/bootstrap/3/dataTables.bootstrap.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/tabletools/2.2.3/js/dataTables.tableTools.min.js"></script>
<script>
    $.fn.dataTable.TableTools.defaults.aButtons = [ "xls" ];
    $(document).ready( function () {
        $('#avail-list').DataTable( {
            // language: {
            //   'search': "Filter: "
            // },
            paging: false,
//            scrollY: 600,
            searching: true,
            ordering: true,
            order: [[ 0, 'asc' ]],
            dom: 'T<"clear">lfrtip',
            tableTools: {
             "sSwfPath": "/swf/copy_csv_xls_pdf.swf"
            }
//            "columns": [
//                { "orderable": true },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false },
//                { "orderable": false }
//              ]
        });

        $('#clickme').click(function(){
            $('#uploadme').click();
        })
        $('#reset').click(function(){
           $('#filename').html('')
           $('#uploadbutton').hide();
        });

    $('input[type=file]').change(function(){
        var val = $(this).val();
        $('#filename').html(val.slice(12));
        $('#uploadbutton').show();
    });

    } );
</script>
</body>
</html>
