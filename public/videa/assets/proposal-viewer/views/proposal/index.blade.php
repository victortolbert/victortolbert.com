@extends('layouts.default')
@section('content')
<style>
    input[type=file] { filter: alpha(opacity=0);opacity: 0; height: 0px; }
    #filename { display: inline-block; padding-left: 6px;}

</style>
<div class="row">
    <div class="col-lg-12">
    {{ Form::open( ['url' => '/show', 'files' => true]) }}
        <div class="form-group">
            {{ Form::file('file', ['id' => 'uploadme', 'class' => 'display:none']) }}
            {{ Form::button('Select an XML File', ['id' => 'clickme', 'class' => 'btn btn-secondary']) }}
            <span id="filename"></span>
        </div>

        <div id="uploadbutton" style="display: none">
        {{ Form::submit('View It', ['class' => 'btn btn-primary']) }}
        {{ Form::reset('Reset', ['id' => 'reset', 'class' => 'btn btn-link']) }}
        </div>
    {{ Form::close() }}
    </div>
</div>
@stop

