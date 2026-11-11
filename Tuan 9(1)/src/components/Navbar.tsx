export type MainTab =
  | 'cart-level1'
  | 'cart-level2'
  | 'cart-level3'
  | 'lesson1'
  | 'lesson2'
  | 'lesson3'
  | 'lesson4'
  | 'lesson5'
  | 'theory';

export interface NavbarProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
}

export const Navbar = ({ activeTab, setActiveTab }: NavbarProps) => {
  return (
    <nav className="nav-tabs">
      <button
        className={`nav-tab-btn ${activeTab === 'cart-level1' ? 'active' : ''}`}
        onClick={() => setActiveTab('cart-level1')}
      >
        Giỏ nhanh
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'cart-level2' ? 'active' : ''}`}
        onClick={() => setActiveTab('cart-level2')}
      >
        Giỏ định lượng
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'cart-level3' ? 'active' : ''}`}
        onClick={() => setActiveTab('cart-level3')}
      >
        Quầy thanh toán
      </button>

      <span style={{ borderLeft: '1px solid #ced4da', margin: '0 4px' }} />

      <button
        className={`nav-tab-btn ${activeTab === 'lesson1' ? 'active' : ''}`}
        onClick={() => setActiveTab('lesson1')}
      >
        Bộ lọc thông minh
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'lesson2' ? 'active' : ''}`}
        onClick={() => setActiveTab('lesson2')}
      >
        Luồng bất đồng bộ
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'lesson3' ? 'active' : ''}`}
        onClick={() => setActiveTab('lesson3')}
      >
        Xưởng nội dung
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'lesson4' ? 'active' : ''}`}
        onClick={() => setActiveTab('lesson4')}
      >
        Kho dữ liệu RTK
      </button>
      <button
        className={`nav-tab-btn ${activeTab === 'lesson5' ? 'active' : ''}`}
        onClick={() => setActiveTab('lesson5')}
      >
        Bộ nhớ TanStack
      </button>

      <span style={{ borderLeft: '1px solid #ced4da', margin: '0 4px' }} />

      <button
        className={`nav-tab-btn ${activeTab === 'theory' ? 'active' : ''}`}
        onClick={() => setActiveTab('theory')}
      >
        Ghi chú học tập
      </button>
    </nav>
  );
};
