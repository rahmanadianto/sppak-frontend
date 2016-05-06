<?php

    function convert_int_to_words($number) {

        $hyphen      = '-';
        $conjunction = ' AND ';
        $separator   = ', ';
        $negative    = 'NEGATIVE ';
        $dictionary  = array(
            0                   => 'ZERO',
            1                   => 'ONE',
            2                   => 'TWO',
            3                   => 'THREE',
            4                   => 'FOUR',
            5                   => 'FIVE',
            6                   => 'SIX',
            7                   => 'SEVEN',
            8                   => 'EIGHT',
            9                   => 'NINE',
            10                  => 'TEN',
            11                  => 'ELEVEN',
            12                  => 'TWELVE',
            13                  => 'THIRTEEN',
            14                  => 'FOURTTEEN',
            15                  => 'FIFTEEN',
            16                  => 'SIXTEEN',
            17                  => 'SEVENTEEN',
            18                  => 'EIGHTEEN',
            19                  => 'NINETEEN',
            20                  => 'TWENTY',
            30                  => 'THIRTY',
            40                  => 'FOURTY',
            50                  => 'FIFTY',
            60                  => 'SIXTY',
            70                  => 'SEVENTY',
            80                  => 'EIGHTY',
            90                  => 'NINETY',
            100                 => 'HUNDRED',
            1000                => 'THOUSAND',
            1000000             => 'MILLION',
            1000000000          => 'BILLION',
            1000000000000       => 'TRILLION',
            1000000000000000    => 'QUADRILLION',
            1000000000000000000 => 'QUINTILLION'
        );

        if (!is_numeric($number)) {
            return false;
        }

        $string  = $fraction = null;

        if (strpos($number, '.') !== false) {
            list($number, $fraction) = explode('.', $number);
        }

        if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) {
            // overflow
            trigger_error(
                'convert_number_to_words only accepts numbers between -' . PHP_INT_MAX . ' and ' . PHP_INT_MAX,
                E_USER_WARNING
            );
            return false;
        }

        if ($number < 0) {
            return $negative . convert_int_to_words(abs($number));
        }

        switch (true) {
            case $number < 21:
                $string = $dictionary[$number];
                break;
            case $number < 100:
                $tens   = ((int) ($number / 10)) * 10;
                $units  = $number % 10;
                $string = $dictionary[$tens];
                if ($units) {
                    $string .= $hyphen . $dictionary[$units];
                }
                break;
            case $number < 1000:
                $hundreds  = $number / 100;
                $remainder = $number % 100;
                $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
                if ($remainder) {
                    $string .= $conjunction . convert_int_to_words($remainder);
                }
                break;
            default:
                $baseUnit = pow(1000, floor(log($number, 1000)));
                $numBaseUnits = (int) ($number / $baseUnit);
                $remainder = $number % $baseUnit;
                $string = convert_int_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
                if ($remainder) {
                    $string .= $remainder < 100 ? $conjunction : $separator;
                    $string .= convert_int_to_words($remainder);
                }
                break;
        }

        return $string;
    }

    function konversi_int_ke_kata_kata($number) {

        $negatif = 'NEGATIF';
        $kamus  = array(
            0                   => ' ',
            1                   => 'SATU',
            2                   => 'DUA',
            3                   => 'TIGA',
            4                   => 'EMPAT',
            5                   => 'LIMA',
            6                   => 'ENAM',
            7                   => 'TUJUH',
            8                   => 'DELAPAN',
            9                   => 'SEMBILAN',
            10                  => 'SEPULUH',
            11                  => 'SEBELAS'
        );

        if (!is_numeric($number)) {
            return false;
        }

        $string = $fraction = null;

        if (strpos($number, '.') !== false) {
            list($number, $fraction) = explode('.', $number);
        }

        if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) {
            // overflow
            trigger_error(
                'konversi_angka_ke_kata_kata hanya menerima bilangan antara -' . PHP_INT_MAX . ' dan ' . PHP_INT_MAX,
                E_USER_WARNING
            );
            return false;
        }

        if ($number < 0) {
            return $negative . convert_int_to_words(abs($number));
        }

        switch ($number) {
            case ($number < 12):
                $string = $kamus[$number];
                break;
            case ($number < 20):
                $string = konversi_int_ke_kata_kata($number - 10) . " BELAS";
                break;
            case ($number < 100):
                $string = konversi_int_ke_kata_kata($number / 10) . " PULUH " . konversi_int_ke_kata_kata($number % 10); 
                break;
            case ($number < 200):
                $string = "SERATUS " . konversi_int_ke_kata_kata($number - 100);
                break;
            case ($number < 1000):
                $string = konversi_int_ke_kata_kata($number / 100) . " RATUS " . konversi_int_ke_kata_kata($number % 100);
                break;
            case ($number < 2000):
                $string = "SERIBU " . konversi_int_ke_kata_kata($number - 1000);
                break;
            case ($number < 1000000):
                $string = konversi_int_ke_kata_kata($number / 1000) . " RIBU " . konversi_int_ke_kata_kata($number % 1000);
                break;
            case ($number < 1000000000):
                $string = konversi_int_ke_kata_kata($number / 1000000) . " JUTA " . konversi_int_ke_kata_kata($number % 1000000);
                break;
        }

        return $string;
    }