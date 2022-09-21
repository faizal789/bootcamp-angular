export class Kategori{
    katId!: number
    deptId !: number
    name !: string
    ket !: string
}


export class Produk{
    kategori !: Kategori
	produkId !: number
    katId    !:    number
	nama     !: string
	nameKategori !: string
}

export class Department{
    deptId !: number 
	nama !: string
	ket !: string
}