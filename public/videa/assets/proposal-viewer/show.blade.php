@extends('proposal-viewer.layouts.default')
@section('content')

<div class="row">
    <div class="col-lg-3">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Seller</h3>
            </div>
            <div class="panel-body">
                <p> <b>{!!  $xml->Proposal->Seller['companyName'] !!}</b>,
                {!!  $xml->Proposal->Seller->Salesperson['name'] !!},
                {!!  $xml->Proposal->Seller->Salesperson->Email !!}<br>
                {!!  $xml->Proposal->Seller->Salesperson->Phone[0]['type'] !!}: {!!  $xml->Proposal->Seller->Salesperson->Phone[0] !!} /
                {!!  $xml->Proposal->Seller->Salesperson->Phone[1]['type'] !!}: {!!  $xml->Proposal->Seller->Salesperson->Phone[1] !!}<br><br>
                <b>{!!  $xml->Proposal->Name !!}</b></p>
          </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Buyer</h3>
            </div>
            <div class="panel-body">
                <p><b>{!!  $xml->Proposal->Buyer['buyingCompanyName'] !!}</b><br>
                {!!  $xml->Proposal->Buyer->BuyerName !!}</p>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Advertiser</h3>
            </div>
            <div class="panel-body">
                <p><b>{!! $xml->Proposal->Advertiser['name'] !!}</b><br>
                {!! $xml->Proposal->Advertiser->Product['name'] !!}</p>
            </div>
        </div>
    </div>
    <div class="col-lg-3">
      @if(!empty($daypartsSummary))
        <table class="table table-bordered">
            <tr>
                <th>Daypart</th>
                <th class="text-center">Average CPP</th>
            </tr>
        @foreach($daypartsSummary as $key => $val)
            <tr>
                <td>{!! $key !!}</td>
                <td class="text-center">{!! number_format($val, 2) !!}</td>
            </tr>
        @endforeach
        </table>
      @endif
        {{--<div class="panel panel-default">--}}
            {{--<div class="panel-heading">--}}
                {{--<h3 class="pnael-title">Daypart Rate Summary</h3>--}}
            {{--</div>--}}
            {{--<div class="panel-body">--}}
            {{--</div>--}}
        {{--</div>--}}
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="print-header">
            <h5><b>{!!   $xml->Proposal->Seller['companyName'] !!}</b>,
                {!!   $xml->Proposal->Seller->Salesperson['name'] !!},
                {!!   $xml->Proposal->Seller->Salesperson->Email !!}<br>
                {!!   $xml->Proposal->Seller->Salesperson->Phone[0]['type'] !!}: {!!   $xml->Proposal->Seller->Salesperson->Phone[0] !!} /
                {!!   $xml->Proposal->Seller->Salesperson->Phone[1]['type'] !!}: {!!   $xml->Proposal->Seller->Salesperson->Phone[1] !!}</h5>
                <h6><b>{!!  $xml->Proposal->Advertiser['name'] !!}</b>, {!!  $xml->Proposal->Advertiser->Product['name'] !!} <br>
                <em>{!!   $xml->Proposal->Name !!}</em><br></h6>
        </div>
        {{--<h2>Avails: {!!  $xml->Proposal->AvailList->Name !!}</h2>--}}
        <table id="avail-list" class="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>Program Name</th>
                <th class="rate"><b>Rate</b></th>
                <th>Rating</th>
                <th><em>CPP</em></th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>MO</th>
                <th>TU</th>
                <th>WE</th>
                <th>TH</th>
                <th>FR</th>
                <th>SA</th>
                <th>SU</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Daypart</th>
            </tr>
            </thead>
            <tbody>
        @foreach( $xml->Proposal->AvailList->AvailLineWithDetailedPeriods as $avails )
            @foreach($avails->Periods->DetailedPeriod as $period)
                <tr>
                    <td>{!!  $avails->AvailName !!}</td>
                    <td class="rate text-right currency">
                      {!!  number_format((float) $period->Rate, 2, ".", ",") !!}
                    </td>
                    <td class="text-center">{!!  $period->DemoValues->DemoValue !!}</td>
                    @if( (float) $period->DemoValues->DemoValue > 0 )
                      <td class="cpp text-right currency">
                        {!!  number_format( (float) $period->Rate / (float) $period->DemoValues->DemoValue, 2, ".", ",")  !!}
                      </td>
                    @else
                      <td class="cpp text-right">N/A</td>
                    @endif
                    <td class="text-center">{!!  $period['startDate'] !!}</td>
                    <td class="text-center">{!!  $period['endDate'] !!}</td>
                    @foreach($avails->DayTimes->DayTime->Days->children($namespaces['tvb-tp']) as $day)
                        @if ($day == 'Y')
                            <td class="text-center"><i class="fa fa-check"></i></td>
                        @else
                            <td></td>
                        @endif
                    @endforeach
                    <td class="text-center">{!! $avails->DayTimes->DayTime->StartTime !!}</td>
                    <td class="text-center">{!! $avails->DayTimes->DayTime->EndTime !!}</td>
                    <td>{!! $avails->DaypartName !!}</td>
                </tr>
            @endforeach
        @endforeach
            </tbody>
        </table>
    </div>
</div>
@stop
