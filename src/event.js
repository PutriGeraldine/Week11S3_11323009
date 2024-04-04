import React from "react";

class Eventhandling extends React.Component{
    constructor(){
        super();
        this.state = {
            nama: 'Geraldine',
            count: 0,
            isLoggedIn: false,
            username: '',
            password: ''
        };
        this.tombolDiklik = this.tombolDiklik.bind(this);
        this.teksDiubah = this.teksDiubah.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    kirimPesan(nama){
        alert('Kirim Pesan Kepada ' + nama);
    }

    ubahTulisan(e){
        e.target.innerHTML = 'Kirim Pesan';
    }

    ubahLagi(e){
        e.target.innerHTML = 'Click Me!!';
    }

    sapa(e){
        this.setState({nama : e.target.value});
    }

    tombolDiklik(){
        console.log('Tombol Diklik!!');
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    teksDiubah(e){
        console.log('Teks Diubah menjadi: ', );
        this.setState({nama: e.target.value})
    }

    handleLogin(){
        const {username, password} = this.state;
        if(username === 'Geraldine' && password === 'qwerty123'){
            this.setState({isLoggedIn: true});
            alert('Login Berhasil!!✨');
        }
        else{
            alert('Login Gagal. Silahkan Coba Lagi!');
        }
    }

    handleLogout(){
        this.setState({
            isLoggedIn: false,
            username: '',
            password: ''
        });
        alert('Logout Berhasil!🙌')
    }

    render(){
        const{isLoggedIn} = this.state;

        if (!isLoggedIn) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <h1>Login</h1>
                    <input type="text" placeholder="username" onChange={e => this.setState({ username: e.target.value })} /><br />
                    <input type="password" placeholder="password" onChange={e => this.setState({ password: e.target.value })} /><br />
                    <button onClick={this.handleLogin}>Login</button>
                </div>
            );
         }

        return(
            <div style={{textAlign: 'center'}}>
                <h1> Selamat Datang di seni!!!</h1>
                <button onClick={()=>alert('Putri Geraldine')}>Click Me!!</button>
                <h4>Aku ingin Mengirim kirim Pesan </h4>
                <button onClick={this.kirimPesan.bind(this, 'Geraldine')}>Tekan Aku!!</button>
                <h1> aku suka di panggil dengan: {this.state.nama}</h1>
                {/* <button onClick={this.tombolDiklik}>Klik Aku!!</button> */}
                <input type={'text'} onChange={this.sapa.bind(this)}></input>
                <h3>Aku Mahasiswa IT DEL</h3>

                <div>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Eventhandling;