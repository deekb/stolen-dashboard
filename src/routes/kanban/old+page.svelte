<script lang="ts">
	import QrCode from '../qrcode/QRCode.svelte';
	import type { PageData } from './$types';
	// import { XLSX } from 'sheetjs';
	import * as XLSX from 'xlsx';
	export let data: PageData;

	let cards = [
		{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		},{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		},{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		},{
			name: `4" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 4" Inch Long - UV Resistant Nylon - 18 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct208`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-C',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/ct208-kable-kontrol-4-inch-18-lbs-black-cable-ties.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=15',
			rev: '1',
			revDate: '2 Feb 25'
		},
		{
			name: `8" Zip Ties`,
			desc: `Kable Kontrol™ Black Zip Ties - 8" Inch Long - UV Resistant Nylon - 50 Lbs Tensile Strength - 1000 pc Pack`,
			pn: `ct209`,
			minQty: 1,
			reorderQty: 4,
			location: 'W8-B',
			department: 'Electrical',
			img: 'https://www.cabletiesandmore.com/images/gallery/kable-kontrol-black-cable-zip-ties-ct209-1.jpg',
			link: 'https://www.cabletiesandmore.com/black-zip-ties-uv?pid=54',
			rev: '1',
			revDate: '2 Feb 25'
		}
	];

	const fileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			const data = e.target.result;
			const workbook = XLSX.read(data, { type: 'binary' });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];
			const rows = XLSX.utils.sheet_to_json(sheet, {
				cellDates: true,
				dateNF: "yyyy-mm-dd"
			});

			cards = rows.map(r => {
				return {
					name: r['Product Name'],
					desc: r['Description'],
					pn: r['Part Number'],
					minQty: r['Reorder Point'],
					reorderQty: r['Reorder QTY'],
					location: r['Location'],
					department: r['Department'],
					img: r['Image Link'],
					link: r['Product Link'],
					rev: r['Revision Number'],
					revDate: r['Revision Date']
				};
			})

			console.log();
		};
		reader.readAsArrayBuffer(file);
	};
</script>

<div class="no-print">
	<div class="mb-3">
		<label for="formFile" class="form-label">Upload a CSV or XLSX</label>
		<input class="form-control" type="file" id="formFile" on:change={fileChange} />
	</div>
</div>

<div class="d-flex printBg flex-wrap" style="width: 11in;">
	{#each cards as card}
		<div
			class="card1 bg-white p-2 rounded flex-shrink-0"
			style="width: 4.25in;height: 6in;border: 1px solid #ccc; margin-left: 5px; margin-bottom: 5px;"
		>
			<div class="card-body1">
				<div class="float-end">
					<QrCode value={card.link} className="qrcode" width={100} />
				</div>

				<h5 class="card-title fw-bolder">{card.name}</h5>
				<h6 class="card-subtitle text-body-secondary mb-3">{card.pn}</h6>

				<p
					class="card-text text-body-secondary mb-1"
					style="font-size: .8rem; height:.6in; overflow: hidden; text-overflow: ellipsis;white-space: wrap;"
				>
					{card.desc}
				</p>

				<div class="row" style="margin-left: 0rem; margin-right: 0rem;">
					<div class="p-1 col-6 text-center">
						<div class="rounded bg-danger-subtle">
							Min QTY
							<div class="fw-bold text-danger fs-3">{card.minQty}</div>
						</div>
					</div>
					<div class="p-1 col-6 text-center">
						<div class="rounded bg-primary-subtle">
							Reorder QTY
							<div class="fw-bold text-primary fs-3">{card.reorderQty}</div>
						</div>
					</div>
					<div class="p-1 col-12">
						<div class="p-2 rounded bg-secondary-subtle">
							<div class="fw-bold">Location</div>
							<div>{card.location}</div>
						</div>
					</div>
					<div class="p-1 col-12">
						<div class="p-2 rounded bg-warning-subtle">
							<div class="fw-bold">Department</div>
							<div>{card.department}</div>
						</div>
					</div>
					<div class="p-1 col-12 text-center">
						<div class="border rounded">
							<img src={card.img} class="img-fluid" style="height: 2in; padding: 5px" alt="" />
						</div>
					</div>
					<div class="ps-3 row text-small text-center" style="font-size: .8rem; color: #a0a0a0">
						Revision: {card.rev} &mdash; {card.revDate}
					</div>
				</div>

				<!-- <div class="row text-center gap-1" style="height: .75in">
				<div class="col-6 border rounded" />
				<div class="col-6 border rounded" style="height: .75in" />
			</div> -->
			</div>
		</div>
	{/each}
</div>

<style>
	.printBg {
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}
	@media print {
		div {
			break-inside: avoid;
		}
		.no-print, .no-print *
		{
			display: none !important;
		}
	}
</style>
