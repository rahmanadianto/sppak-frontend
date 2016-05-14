<?php

require_once("dompdf/dompdf_config.inc.php");
require_once("number.php");

$nik = "11111111111111111";
$nomorakta = "11111111111";
$tempatlahir = "Bandung";
$tahunlahir = 1994;
$bulanlahir = 1;
$tanggallahir = 1;
$namaanak = "Natan";
$anakke = 1;
$jeniskelamin = "L";
$namaayah = "Natan ";
$namaibu = "Natan";

if (isset($_POST["nik"]))
	$nik = $_POST["nik"];
	
if (isset($_POST["nomorakta"]))
	$nik = $_POST["nomorakta"];

if (isset($_POST["tempatlahir"]))
	$tempatlahir = $_POST["tempatlahir"];
	
if (isset($_POST["tanggallahir"]))
	$tanggallahir = $_POST["tanggallahir"];
	
if (isset($_POST["bulanlahir"]))
	$bulanlahir = $_POST["bulanlahir"];
	
if (isset($_POST["tahunlahir"]))
	$tahunlahir = $_POST["tahunlahir"];
	
if (isset($_POST["namaanak"]))
	$namaanak = $_POST["namaanak"];

if (isset($_POST["anakke"]))
	$anakke = $_POST["anakke"];

if (isset($_POST["jeniskelamin"]))
	$jeniskelamin = $_POST["jeniskelamin"];

if (isset($_POST["namaayah"]))
	$namaayah = $_POST["namaayah"];

if (isset($_POST["namaibu"]))
	$namaibu = $_POST["namaibu"]; 
	
$tempatlahir = strtoupper($tempatlahir);
$namaanak = strtoupper($namaanak);
$jeniskelamin = strtoupper($jeniskelamin);
$namaayah = strtoupper($namaayah);
$namaibu = strtoupper($namaibu);
	
$map_kelamin = array(
	"L" => "LAKI-LAKI",
	"P" => "PEREMPUAN"
);

$map_sex = array(
	"L" => "MALE",
	"P" => "FEMALE"
);
  
ob_start();
?>

<html>

<head>
	<style type="text/css">
		body {
			padding: 50px 30px;
			font-size: 12px; 
		}
	
		.text-right {
			text-align: right;
		}
		
		.text-left {
			text-align: left;
		}
		
		.text-center {
			text-align: center;
		}
		
		.inline {
			display: inline;
			margin: 3px;
		}
		
		#nomor-dok {
			font-weight: bold;
			font-size: 16px;
		}
		
		#nik {
			position: fixed;
			left: 195px;
			top: 78px;
			font-size: 14px;
			font-weight: bold;
		}
		
	 	#content {
			margin-top: 80px;	 
		}
		
		#signature {
			margin-top: 40px;
			float: right;
			width: 50%;
		}
		
		hr {
			border: none;
			height: 1px;
			margin: 0px;
			/* Set the hr color */
			color: #333; /* old IE */
			background-color: #333; /* Modern Browsers */
		}
		
		.dot{
			border: 0 none;
			border-top: 2px dotted #333;
			background: none;
			height:0;
		} 
		
		h3 {
			font-size: 14px;
			margin: 0px;
			font-weight: normal;
		}
		
		h2 {
			font-size: 16px;
			margin: 0px;
			font-weight: bold;	
		}
		
	</style>
</head>

<body>
	
	<!-- Nomor Dokumen -->
	<div class="text-right">
		<div class="inline">
			No. AL
		</div>
		<div class="inline" id="nomor-dok">
			6060016769
		</div>
	</div>
	
	<!-- NIK -->
	<div class="text-left">
		<div>
			<h3>Nomor Induk Kependudukan</h3>
		</div>
		<hr width="25%" align="left"/>
		<div>
			<em>Personnel Registration Number</em>
		</div>
		
		<div id="nik">
			: <span style="margin-left: 30px"><?php echo $nik; ?></span>
		</div> 
	</div> 
	
	<!-- LOGO -->
	<div style="width: 150px; height: 150px;">
	</div>
	
	<!-- Judul Dokumen -->
	<div class="text-center">
		<h2>PENCATATAN SIPIL</h2>
	</div>
	<hr width="25%" align="center"/>
	<div class="text-center">
		<em>R E G I S T R Y </em><em> O F F I C E</em>
	</div>

	<div style="width: 50%; margin-left: 160px">
		<div style="display: inline-block; width: 50%">
			<div class="text-center">
				<h2 style="font-weight: normal">WARGA NEGARA</h2>
			</div>
			<hr width="80%" align="center" />
			<div class="text-center">
				<em>N A T I O N A L I T Y </em>
			</div>
		</div>
		
		<div style="display: inline-block; width: 50%">
			<div class="text-left">
				<h2>I N D O N E S I A</h2>
			</div>
			<hr width="85%" class="dot"/>
			<div class="text-left">
				<h2 style="font-weight: normal"><em>I N D O N E S I A N </em></h2>
			</div>
		</div>
	</div>
	
	<div class="text-center">
		<h2>KUTIPAN AKTA KELAHIRAN</h2>
	</div>
	<hr width="35%" align="center"/>
	<div class="text-center">
		<em>E X C E R T </em>
		<em> O F </em>
		<em> B I R T H </em>
		<em> C E R T I F I C A T E </em>
	</div>
	
	<!-- Content -->
	<div id="content">
		<!-- Row 1 -->
		<div>
			<div style="display: inline-block; width: 32%">
				<div>
					<h3>Berdasarkan Akta Kelahiran Nomor</h3>
				</div>
				<hr/>
				<div>
					<em>By virtue of Birth Certificate Number</em>
				</div>
			</div>
			<div style="display: inline-block; width: 68%">
				<div style="margin-left: 20px">
					<h3 style="font-weight: bold"><?php echo $nomorakta; ?></h3>
				</div>
				<hr class="dot"/>
			</div>
		</div>
		<!-- End Row 1 -->
		
		<!-- Row 2 -->
		<div style="margin-top: -15px">
			<div style="display: inline-block; width: 25%">
				<div>
					<h3>Menurut stbld</h3>
				</div>
				<hr/>
				<div>
					<em>in accordance with state gazette</em>
				</div>
			</div>
			<div style="display: inline-block; width: 75%">
				<div>
					<h3 style="font-weight: bold">-</h3>
				</div>
				<hr class="dot"/>
			</div>
		</div>
		<!-- End Row 2 -->
		
		<!-- Row 3 -->
		<div style="margin-top: -15px">
			<div style="display: inline-block; width: 8%">
				<div>
					<h3>bahwa di</h3>
				</div>
				<hr/>
				<div>
					<em>that in</em>
				</div>
			</div>
			<div style="display: inline-block; width: 42%">
				<div style="margin-left: 20px">
					<h3 style="font-weight: bold"><?php echo $tempatlahir; ?></h3>
				</div>
				<hr class="dot"/>
			</div>
			<div style="display: inline-block; width: 12%">
				<div>
					<h3>pada tanggal</h3>
				</div>
				<hr/>
				<div>
					<em>on date</em>
				</div>
			</div>
			<div style="display: inline-block; width: 38%">
				<div style="margin-left: 20px">
					<h3 style="font-weight: bold"><?php echo konversi_int_ke_kata_kata($tanggallahir); ?></h3>
				</div>
				<hr class="dot"/>
				<div style="margin-left: 20px">
					<em><?php echo convert_int_to_words($tanggallahir); ?></em>
				</div>
			</div>
		</div>
		<!-- End Row 3 -->
		
		<!-- Row 4 -->
		<div style="margin-top: -30px">
			<div style="display: inline-block; width: 15%">
				<div>
					<h3 style="font-weight: bold"><?php echo bulan($bulanlahir); ?></h3>
				</div>
				<hr class="dot"/>
				<div>
					<em><?php echo month($bulanlahir); ?></em>
				</div>
			</div>
			<div style="display: inline-block; width: 6%">
				<div>
					<h3>tahun</h3>
				</div>
				<hr align="center"/>
				<div>
					<em>on year</em>
				</div>
			</div>
			<div style="display: inline-block; width: 69%">
				<div style="margin-left: 20px">
					<h3 style="font-weight: bold"><?php echo konversi_int_ke_kata_kata($tahunlahir); ?></h3>
				</div>
				<hr class="dot"/>
				<div style="margin-left: 20px">
					<em><?php echo convert_int_to_words($tahunlahir); ?></em>
				</div>
			</div>
			<div style="display: inline-block; width: 10%">
				<div>
					<h3>telah lahir :</h3>
				</div>
				<hr/>
				<div>
					<em>was born</em>
				</div>
			</div>
		</div>
		<!-- End Row 4 -->
		
		<!-- Row 5 -->
		<div style="margin-top: -30px">
			<div class="text-center">
				<div>
					<h3 style="font-weight: bold"><?php echo $namaanak; ?></h3>
				</div>
				<hr class="dot"/>
			</div>
		</div>
		<!-- End Row 5 -->
		
		<!-- Row 6 -->
		<div>
			<div style="display: inline-block; width: 8%">
				<div>
					<h3>anak ke</h3>
				</div>
				<hr/>
				<div>
					<em>child no</em>
				</div>
			</div>
			<div style="display: inline-block; width: 92%">
				<div>
					<h3 style="font-weight: bold">
						<?php
							echo konversi_int_ke_kata_kata($anakke) . ', ' . $map_kelamin[$jeniskelamin] . ' DARI AYAH ' . 
							$namaayah . ' DAN IBU ' . $namaibu;
						?>	
					</h3>
				</div>
				<hr class="dot"/>
				<div>
					<em>
						<?php
							echo convert_int_to_words($anakke) . ', ' . $map_sex[$jeniskelamin] . ' FROM FATHER ' . 
							$namaayah . ' AND MOTHER ' . $namaibu;
						?>		
					</em>
				</div>
			</div>
		</div>
		<!-- End Row 6 -->
		
	</div>
	
	<!-- Signature -->
	<div id="signature">
		<!-- Row 1 -->
		<div>
			<div style="display: inline-block; width: 42%">
				<div>
					<h3>Kutipan ini dikeluarkan</h3>
				</div>
				<hr/>
				<div>
					<em>The excerpt is issued</em>
				</div>
			</div>
			<div style="display: inline-block; width: 58%">
				<div style="margin-left: 5px">
					<h3 style="font-weight: bold">DI BANDUNG</h3>
				</div>
				<hr class="dot"/>
			</div>
		</div>
		<!-- End Row 1 -->
		
		<!-- Row 2 -->
		<div style="margin-top: -20px">
			<div style="display: inline-block; width: 23%">
				<div>
					<h3>pada tanggal</h3>
				</div>
				<hr/>
				<div>
					<em>on date</em>
				</div>
			</div>
			<div style="display: inline-block; width: 77%">
				<div style="margin-left: 5px">
					<h3 style="font-weight: bold">
						<?php
							echo konversi_int_ke_kata_kata(date("j")) . ' ' . bulan(date("n")) ;
						?>
					</h3>
				</div>
				<hr class="dot"/>
				<div style="margin-left: 5px">
					<em>
						<?php
							echo convert_int_to_words(date("j")) . ' of ' . month(date("n")) ;
						?>
					</em>
				</div>
			</div>
		</div>
		<!-- End Row 2 -->
		
		<!-- Row 3 -->
		<div style="margin-top: -30px">
			<div>
				<h3 style="font-weight: bold">
					<?php
						echo 'TAHUN ' . konversi_int_ke_kata_kata(date("Y")) ;
					?>
				</h3>
			</div>
			<hr class="dot"/>
			<div>
				<em>
					<?php
						echo 'ON YEAR ' . convert_int_to_words(date("Y")) ;
					?>
				</em>
			</div>
		</div>
		<!-- End Row 3 -->
		
		<!-- Row 4 -->
		<div>
			<div style="display: inline-block; width: 15%">
				<div>
					<h3>Kepala</h3>
				</div>
				<hr/>
				<div>
					<em>Head of</em>
				</div>
			</div>
			<div style="display: inline-block; width: 75%">
				<div>
					<h3 style="font-weight: bold">DINAS KEPENDUDUKAN DAN</h3>
				</div>
				<hr class="dot"/>
				<div>
					<h3 style="font-weight: bold">CATATAN SIPIL</h3>
				</div>
			</div>
		</div>
		<!-- End Row 4 -->
		
		<!-- Row 5 -->
		<div style="margin-top: 10px">
			<hr class="dot"/>
		</div>
		<!-- End Row 5 -->
		
		<!-- Row 6 -->
		<div style="margin-top: 70px">
			<div>
				<h3 style="font-weight: bold">FIQIE, SH, M.Si</h3>
			</div>
			<hr/>
			<div>
				<h3 style="font-weight: bold">NIP 13514602201511023</h3>
			</div>
		</div>
		<!-- End Row 6>
	</div>
	
</body>

</html>

<?php
$html = ob_get_clean();

$dompdf = new Dompdf();
$dompdf->set_paper("A4");
$dompdf->load_html($html);
$dompdf->render();
$dompdf->stream("akta.pdf", array('Attachment'=>0));
?>