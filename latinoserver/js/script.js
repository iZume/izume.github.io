$(document).ready(function(){

	var PosibleRock = 1478856782721; // 1478856782721
	var PosibleSniper = PosibleRock + (40*60000); // 6:41

	setInterval(function(){
		var boss = {
			'sniper':{
				'tiempo': BossTime(PosibleSniper)
			},
			'rock':{
				'tiempo': BossTime(PosibleRock)
			}
		}
		var r_ex = boss.rock.tiempo.minutos > 56 || boss.rock.tiempo.minutos < 2;
		var p_ex = boss.sniper.tiempo.minutos > 58 || boss.sniper.tiempo.minutos < 2;

		var r = r_ex == 1 ? "Ahora mismo probablemente!" : boss.rock.tiempo.minutos + ' minutos';
		var p = p_ex == 1 ? "Ahora mismo probablemente!" : boss.sniper.tiempo.minutos + ' minutos';

		$("#sniper-time").css({'background-color': p_ex == 1 ? 'rgba(0, 255, 0, 0.65)' : 'rgba(0, 0, 0, 0.65)'});
		$("#rock-time").css({'background-color': r_ex == 1 ? 'rgba(0, 255, 0, 0.65)' : 'rgba(0, 0, 0, 0.65)'});

		$("#rock-time").text(r);
		$("#sniper-time").text(p);

	}, 100);
	function BossTime(base) {
		var now = Date.now();

		var minutos_actuales = new Date(now).getMinutes();
		var minutos_base = new Date(base).getMinutes();
		var diferencia_x = 0;

		diferencia_x = minutos_actuales < minutos_base ? (minutos_base - minutos_actuales) : (60 - minutos_actuales + minutos_base);
		 	
		// Todo a unix para mayor control :D
		var distancia = diferencia_x * (1000*60);
		return {
			'minutos': Math.round(distancia/60000)
		};
	}
});