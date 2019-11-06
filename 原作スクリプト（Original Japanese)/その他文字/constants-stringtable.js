
var StringTable = {
	LoadSave_SaveQuestion: 'このファイルにセーブしますか？',
	LoadSave_NoLoad: 'ロードするファイルがありません',
	LoadSave_NoData: 'no data',
	LoadSave_Chapter: 'Chapter',
	LoadSave_SaveFileMark: 'File',
	LoadSave_Rest: '拠点',
	
	Communication_NoData: 'データがありません',
	
	GameStart_DifficultySelect: 'ゲームの難易度を選択してください',
	GameStart_ClearPointDescription: 'クリアポイントを使用してアイテムを引き継ぐことができます。\n最初から強化された状態でゲームをプレイしたい場合におすすめです。\n\n現在のクリアポイント： ',
	GameStart_ClearPointQuestion: 'アイテムを引き継ぎますか？',
	
	UnitSortie_Start: 'Press Space',
	UnitSortie_Max: 'ユニットの最大出撃数',
	UnitSortie_Question: '出撃を開始しますか？',
	
	Stock_Extract: 'アイテムを取り出します',
	Stock_Store: 'アイテムを預けます',
	Stock_AllStore: 'アイテムを全て預けます',
	
	Marshal_StockOperation: '上下キーでユニットを切り替えます',
	Marshal_StockTrade: '入手しているアイテムを取り出します',
	Marshal_ItemTrade: 'ユニット同士でアイテムを交換します',
	Marshal_UnitSort: 'ユニットの位置を並び替えます',
	Marshal_UnitStatus: 'ユニットのステータスを確認します',
	Marshal_Shop: 'アイテムを購入します',
	Marshal_Bonus: 'ボーナスとアイテムを交換します',
	Marshal_ItemUse: 'アイテムを使用します',
	Marshal_ClassChange: 'ユニットのクラスを変更します',
	
	ItemUse_Unit: 'ユニット',
	ItemUse_Stock: 'ストック',
	ItemUse_Question: 'このアイテムを使用しますか？',
	
	ExperienceDistribution_CannotLevelup: 'これ以上レベルアップできません',
	ExperienceDistribution_BonusShortage: 'ボーナスが足りません',
	
	Extra_Character: 'ゲーム中に登場した人物が記録されています',
	Extra_Word: 'ゲーム中に登場した専門用語が記録されています',
	Extra_Gallery: 'ゲーム中に表示した画像が記録されています',
	Extra_SoundRoom: 'ゲーム中に再生した音楽が記録されています',
	Extra_Recollection: 'ゲーム中に一度見たシーンが記録されています',

	Config_MusicPlay: 'BGMの音量',
	Config_MusicPlayDescription: 'BGMの音量を決定します',
	Config_SoundEffect: 'SEの音量',
	Config_SoundEffectDescription: 'SEの音量を決定します',
	Config_RealBattle: 'リアル戦闘形式',
	Config_RealBattleDescription: '戦闘モーションを表示して戦うかどうかを決定します',
	Config_AutoTurnEnd: 'オートターンエンド',
	Config_AutoTurnEndDescription: '自動でターン終了を行うかどうかを決定します',
	Config_AutoTurnSkip: '敵ターンスキップ',
	Config_AutoTurnSkipDescription: '敵ターンをスキップするかどうかを決定します',
	Config_MapGrid: 'マップのグリッド',
	Config_MapGridDescription: 'マップ上にグリッドを表示するかどうかを決定します',
	Config_UnitSpeed: 'ユニットスピード',
	Config_UnitSpeedDescription: 'ユニットが移動する速度を決定します',
	Config_MessageSpeed: 'メッセージスピード',
	Config_MessageSpeedDescription: '文字を表示する速度を決定します',
	Config_MapUnitWindow: 'マップユニットウインドウ',
	Config_MapUnitWindowDescription: 'ユニットウインドウを詳細表示するかどうかを決定します',
	Config_LoadCommand: 'ロードコマンド',
	Config_LoadCommandDescription: '戦闘時にロードという名前のコマンドを表示するかどうかを決定します',
	Config_AutoCursor: 'オートカーソル',
	Config_AutoCursorDescription: '先頭キャラにカーソルを合わせるかどうかを決定します',
	Config_MouseOperation: 'マウス操作',
	Config_MouseOperationDescription: 'マウスによる操作を有効にするかどうかを決定します',
	Config_MouseCursorTracking: 'マウスカーソル追跡',
	Config_MouseCursorTrackingDescription: 'マウスカーソルを自動で追跡させるかどうかを決定します',
	Config_Voice: 'ボイスの音量',
	Config_VoiceDescription: 'ボイスの音量を決定します',
	Config_RealBattleScaling: '戦闘画面の拡大',
	Config_RealBattleScalingDescription: 'リアル戦闘で画面を拡大するかどうか決定します',
	Config_ScrollSpeed: 'スクロールスピード',
	Config_ScrollSpeedDescription:  'ユニットが動作する際のスクロール速度を決定します',
	Config_EnemyMarking: '敵の行動範囲表示',
	Config_EnemyMarkingDescription:  'マップ上でのキャンセルによる行動範囲の可視化を決定します',
	Config_MapUnitHpVisible: 'マップユニットHP表示',
	Config_MapUnitHpVisibleDescription:  'マップ上のユニットにHPを表示します',
	Config_MapUnitSymbol: 'マップユニットシンボル',
	Config_MapUnitSymbolDescription:  'マップ上のユニットに所属を表示します',
	Config_DamagePopup: 'ダメージポップアップ',
	Config_DamagePopupDescription: '戦闘時に相手に与えたダメージを表示します',
	Config_SkipControl: 'スキップの無効',
	Config_SkipControlDescription: 'スキップ入力を無効にする対象を選択します',
	
	ItemChange_UnitItemFull: 'アイテムが一杯です\n決定またはキャンセルを押してください',
	ItemChange_TradeTitle: 'このアイテムと交換しますか？',
	ItemChange_StockSendTitle: '入手アイテムをストックに送りますか？',
	ItemChange_StockThrowTitle: '入手アイテムを捨てますか？',
	ItemChange_StockItemFull: 'ストックアイテムが一杯です\n交換または破棄してください',
	ItemChange_TargetItem: '対象アイテム',
	
	BattleSetup_NoPlayer: 'プレイヤーが存在しないため、\nゲームオーバーになります',
	
	BattleResult_GetGold: '獲得ゴールド',
	BattleResult_GetBonus: '獲得ボーナス',
	BattleResult_GetItem: '獲得アイテム',
	
	Rest_Next: '拠点を終了しますか？',
	
	Quest_Select: 'このマップに進みますか？',
	Quest_EnemyTotal: '敵の総数',
	Quest_AverageLevel: '敵の平均レベル',
	Quest_GetGold: '獲得ゴールド',
	Quest_GetBonus: '獲得ボーナス',
	Quest_GetItem: 'Get!',
	
	ClassChange_UnitClassChange: 'このクラスにクラスチェンジしますか？',
	ClassChange_UnableClassChange: 'このユニットはクラスチェンジできません',
	ClassChange_UnableClassChangeMore: 'このユニットはこれ以上\nクラスチェンジできません',
	ClassChange_UnableClassChangeItem: 'このユニットはこのアイテムで\nクラスチェンジできません',
	
	Metamorphoze_Change: '形態変化してよろしいですか？',
	
	ShopLayout_SelectBuy: '買う',
	ShopLayout_SelectSell: '売る',
	ShopLayout_Unit: 'ユニット',
	ShopLayout_Stock: 'ストック',
	
	ResurrectionLayout_Empty: '蘇生させるユニットは存在しません',
	ResurrectionLayout_Question: 'このユニットを蘇生しますか？',
	
	UnitSummary_Alive: '生存',
	UnitSummary_Death: '死亡',
	UnitSummary_Injury: '負傷',
	UnitSummary_Erase: '消去',
	UnitSummary_Immortal: '不死',
	
	SkillList_Owner: 'スキル所有者',
	
	EventTest_End: '回想が終了しました',
	EventTest_Key: '決定またはキャンセルで終了します',
	
	QuestionWindow_DefaultCase1: 'はい',
	QuestionWindow_DefaultCase2: 'いいえ',
	
	InfoWindow_Information: '- Notice -',
	InfoWindow_Warning: '- Warning -',
	
	ReverseWeapon_Magic: '魔法の武器',
	ReverseWeapon_Physics: '物理の武器',
	
	MapPosChoose_Unit: 'このユニットでよろしいですか？',
	MapPosChoose_Pos: 'この位置でよろしいですか？',
	
	Discard_Warning: 'このアイテムは捨てることができません',
	
	StockItem_ItemDiscard: 'このアイテムを捨てますか？',
	StockItem_Extract: '取り出す',
	StockItem_Store: '預ける',
	StockItem_AllStore: '全預け',
	
	ItemWork_Equipment: '装備',
	ItemWork_Use: '使用',
	ItemWork_Discard: '捨てる',
	
	ItemInfo_Recovery: '回復',
	ItemInfo_EntireRecovery: '全体回復',
	ItemInfo_Damage: 'ダメージ',
	ItemInfo_ClassChange: 'クラスチェンジ',
	ItemInfo_Doping: 'ドーピング',
	ItemInfo_Resurrection: '蘇生',
	ItemInfo_SkillChange: 'スキル習得',
	ItemInfo_Quick: '行動回復',
	ItemInfo_Teleportation: '瞬間移動',
	ItemInfo_Rescue: '救出',
	ItemInfo_Key: '鍵開け',
	ItemInfo_Durability: '耐久変化',
	ItemInfo_Steal: '奪取',
	ItemInfo_State: 'ステート付加',
	ItemInfo_StateRecovery: 'ステート回復',
	ItemInfo_Switch: '特殊',
	ItemInfo_Fusion: 'フュージョン',
	ItemInfo_Metamorphoze: '形態変化',
	ItemInfo_Unusable: '使用不可',
	ItemInfo_Custom: 'カスタム',
	
	ItemWord_SuffixItem: 'アイテム',
	ItemWord_SuffixWand: 'の杖',
	ItemWord_MultiAttack: '回攻撃',
	
	SkillWord_Less: '％以下',
	SkillWord_Invocation: '発動率',
	FusionWord_Success: '成功率',
	
	UnitSentence_Support: '-支援相手-',
	
	UnitType_Player: 'PLAYER',
	UnitType_Enemy: 'ENEMY',
	UnitType_Ally: 'ALLY',
	
	WeaponOption_HpAbsorb: 'HP吸収',
	WeaponOption_NoGuard: '防御無視',
	WeaponOption_HpMinimum: 'HPを1にする',
	WeaponOption_HalveAttack: '攻撃半減',
	WeaponOption_HalveAttackBreak: '攻撃半減破り',
	WeaponOption_SealAttack: '攻撃封じ',
	WeaponOption_SealAttackBreak: '攻撃封じ破り',
	
	DamageType_Fixed: '固定',
	DamageType_Physics: '物理',
	DamageType_Magic: '魔法',
	DamageType_Name: '属性',
	
	DurabilityType_Max: '全回復',
	DurabilityType_Half: '半減',
	DurabilityType_Break: '破壊',
	
	Chapter_Header: '第',
	Chapter_Footer: '章',
	Chapter_SideStory: '外伝',
	Chapter_First: '序章',
	Chapter_Last: '終章',
	Chapter_Rest: '★',
	Chapter_Quest: 'QA',
	
	Spped_Direct: '瞬時',
	Speed_High: '高速',
	Speed_Normal: '普通',
	Speed_Low: '低速',
	
	AutoTurnSkip_Direct: '瞬時',
	AutoTurnSkip_Quick: '早送り',
	AutoTurnSkip_None: 'なし',
	
	SkipControl_AllInput: '全入力',
	SkipControl_Mouse: 'マウス',
	SkipControl_None: 'なし',
	
	MapUnitHp_Number: '数値',
	MapUnitHp_Gauge: 'ゲージ',
	MapUnitHp_None: 'なし',
	
	Objective_Victory: '勝利条件',
	Objective_Defeat: '敗北条件',
	
	Select_On: 'オン',
	Select_Off: 'オフ',
	
	Range_Self: '単体',
	Range_All: '全域',
	
	Recovery_Value: '回復値',
	Recovery_All: '全回復',
	
	Aggregation_SuffixEquipment: ' 装備',
	Aggregation_SuffixPossession: ' 所持',
	Aggregation_SuffixAddition: ' 付加',
	Aggregation_Match: '対象',
	Aggregation_Mismatch: '対象外',
	Aggregation_MatchAll: '全対象',
	Aggregation_MismatchAll: '全対象外',
	
	Key_Target: '対象',
	Key_Gate: '扉',
	Key_Treasure: '宝箱',
	
	ItemLost: 'が壊れました',
	ItemSteal: 'を奪われました',
	
	ClassChangeInfo_Target: '対象',
	
	Teleportation_Range: '範囲',
	
	SkillCategory_BattleAttack: '戦闘攻撃系',
	SkillCategory_BattleDefence: '戦闘防御系',
	SkillCategory_BattleAllowed: '戦闘許可系',
	SkillCategory_Allowed: '許可系',
	SkillCategory_Command: 'コマンド系',
	SkillCategory_Action: '動作系',
	SkillCategory_Custom: 'カスタム',
	
	GetTitle_ItemChange: 'ItemGet!……',
	GetTitle_SkillChange: 'SkillGet!……',
	GetTitle_GoldChange: 'GoldGet!……',
	GetTitle_BonusChange: 'BonusGet!……',
	
	LostTitle_ItemChange: 'ItemLost……',
	LostTitle_SkillChange: 'SkillLost……',
	LostTitle_GoldChange: 'GoldLost……',
	LostTitle_BonusChange: 'BonusLost……',
	
	GetTitle_ExperiencePlus: 'Exp Get!',
	GetTitle_NewSkill: 'NewSkill!……',
	GetTitle_PowerupSkill: 'PowerUp!……',
	
	UnitSimple_Target: 'Target……',
	
	State_Addition: '付加',
	State_Recovery: '回復',
	State_Regist: '耐性',
	State_AllBadState: '全バッドステート',
	
	HideData_Secret: '-secret-',
	HideData_Question: '???',
	HideData_Unknown: 'Unknown',
	
	AttackMenu_AttackCount: '攻撃回数',
	
	PlayerActive: '自軍ユニット',
	
	SkipProgress: 'スキップ中…',
	
	PlayTime: 'Play Time',
	
	Status_Level: 'Lv',
	Status_Experience: 'Ex',
	
	Signal_Turn: 'TURN',
	Signal_Gold: 'GOLD',
	Signal_Bonus: 'BONUS',
	
	CurrencySign_Gold: 'G',
	CurrencySign_Bonus: 'B',
	CurrencySign_Point: 'P',
	
	SignWord_Multiple: '×',
	SignWord_Percent: '％',
	SignWord_WaveDash: '～',
	SignWord_Limitless: '--'
};

var ContentLayout = {
	ITEM_SPACE: 60,
	KEYWORD_HEIGHT: 5
};

var HorizontalLayout = {
	OBJECT_SPACE: 0,
	OBJECT_WIDTH: 0
};
